import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { InstructionSetMetadata } from './metadata/instruction-set-metadata';
import { InstructionMetadata } from './metadata/instruction-metadata';
import { InstructionType } from './instruction-type';
import { ClearInstruction } from './instruction-0-clear';
import { SolidInstruction } from './instruction-1-solid';
import { PatternInstruction } from './instruction-2-pattern';
import { SliderInstruction } from './instruction-3-slider';
import { FadeInstruction } from './instruction-4-fade';
import { StochasticInstruction } from './instruction-5-stochastic';
import { RepeatInstruction } from "./instruction-repeat";

import { LdlServer } from "../ldl-server";

import { ElectronService } from 'ngx-electron';

export class LdlServerInfo {
  ipAddress: string;
  server: string;
}


/**
 * Provides services to retrieve instruction
 * metadata and manipulate programs.
 * @author    Kevin White
 * @date      30 Apr 2020
 */
@Injectable()
export class InstructionService {
  private instructionSet : InstructionSetMetadata;

  discoveredServers: LdlServer[] = null;

  onDiscoveredLdlServers = new EventEmitter<LdlServer[]>();

  constructor(
    private http: HttpClient,
    private _electronService: ElectronService
  ) {
    // TODO: localise strings
    // instantiate the instructions that makeup the instruction set
    const instructions = [
      // structure
      new InstructionMetadata(InstructionType.Repeat, -1, 'Repeat', 'Repeats a set of instructions 1 or more times')


      // effects
      , new InstructionMetadata(InstructionType.Clear, 0, 'Clear', 'Clears the LEDs by turning them all off')
      , new InstructionMetadata(InstructionType.Solid, 1, 'Solid', 'Sets all LEDs to the same colour')
      , new InstructionMetadata(InstructionType.Pattern, 2, 'Pattern', 'Sets the first n LEDs to a pattern which is then repeated along the entire length of LEDs')
      , new InstructionMetadata(InstructionType.Slider, 3, 'Slider', 'Moves a slider (a length of pixels of a specified colour) gradually along the length of pixels')
      , new InstructionMetadata(InstructionType.Fade, 4, 'Fade', 'Fades in or fades out the LEDs from the start colour to the end colour')
      , new InstructionMetadata(InstructionType.Stochastic, 5, 'Stochastic', 'Randomly sets the LEDs to two or more colours')
    ];

    this.instructionSet = new InstructionSetMetadata(instructions, '1.0.0');


    this.addLdlServerListener();
  }

  /**
   * Gets the metadata of the instruction set.
   * @returns   The instructions set metadata
   * @author    Kevin White
   * @date      30 Apr 2020
   */
  get InstructionSet(): InstructionSetMetadata {
    return this.instructionSet;
  }

  /**
   * Factory method instantiates a new instruction according
   * to the instruction type.
   * @param   instructionType The type of instruction to be instantiated
   * @author  Kevin White
   * @date    12 May 2020
   */
  createInstructionInstance(instructionType: InstructionType) {
    switch (instructionType) {
      // structure
      case InstructionType.Repeat:
        return new RepeatInstruction(this);


      // effects
      case InstructionType.Clear:
        return new ClearInstruction();
      case InstructionType.Solid:
        return new SolidInstruction();
      case InstructionType.Pattern:
        return new PatternInstruction();
      case InstructionType.Slider:
        return new SliderInstruction();
      case InstructionType.Fade:
        return new FadeInstruction();
      case InstructionType.Stochastic:
        return new StochasticInstruction();
      default:
        return null;
    }
  }

  /*
  uploadLdlProgram(ip: string, username: string, password: string, ldlProgram: string) {
    const encodedUsername = btoa(`${username}:${password}`);
    const params = new HttpParams()
      .set('ip', ip)
      .set('authorisation', encodedUsername);


    // const ldlProgramUploadEndpoint = 'https://localhost:44350/api/LightServices/program?' + ip + '&authorisation=' + encodedUsername;
    const ldlProgramUploadEndpoint = `https://localhost:44350/api/LightServices/program?${params.toString()}`;
    const headers = new HttpHeaders();
    // headers.set('Authorization', `Basic: ${encodedUsername}`);
    headers.set('Content-Type', 'application/json');


    return this.http.post(
      ldlProgramUploadEndpoint,
      JSON.stringify(ldlProgram),
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      // , null
      // , { params: params }
    );

  }
  */

  uploadLdlProgram(ip: string, username: string, password: string, ldlProgram: string) {
    const ldlProgramToSend = {
      ip: ip,
      username: username,
      password: password,
      program: ldlProgram
    };
    const ldlProgramToSendJson = JSON.stringify(ldlProgramToSend);

    this._electronService.ipcRenderer.send('publish-ldl-program', ldlProgramToSendJson);

    // return this.http.post(
    //   "http://192.168.6.199/program",
    //   JSON.stringify(ldlProgram),
    //   { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    //   // , null
    //   // , { params: params }
    // );
  }  

  discoverServers() {
    // const ldlDiscoverEndpoint = `https://localhost:44350/api/LightServices/servers`;
    // return this.http.get(ldlDiscoverEndpoint);
    this._electronService.ipcRenderer.send('find-ldl-servers');
  }

  private addLdlServerListener() {
    if(this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.on('discovered-ldl-servers', (event, resp:LdlServer[]) => {
        console.log(`Message received! ${resp}`);

        this.discoveredServers = resp;
        this.onDiscoveredLdlServers.emit(this.discoveredServers);
      });
      setTimeout(()=> this.discoverServers(), 1000);
    } 
  }
}
