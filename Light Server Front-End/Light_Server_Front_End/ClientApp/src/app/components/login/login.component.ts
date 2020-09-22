// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';

// LDL
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


import { Colour } from '../ldl/colour';
import { PixelComponent } from '../ldl/pixel.component';
import { DurationComponent } from '../ldl/duration.component';
import { Program } from '../ldl/instruction-class/program';
import { Instruction } from '../ldl/instruction-class/instruction';
import { ClearInstruction } from '../ldl/instruction-class/instruction-0-clear';
import { InstructionType } from '../ldl/instruction-class/instruction-type';

import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { ConfigurationService } from '../../services/configuration.service';
import { Utilities } from '../../services/utilities';
import { UserLogin } from '../../models/user-login.model';
import { AddInstruction } from "../ldl/instruction-class/add-instruction";
import { InstructionService } from "../ldl/instruction-class/instruction-service";
import { AddInstructionPosition } from "../ldl/instruction-class/add-instruction-position";
import { SolidInstruction } from "../ldl/instruction-class/instruction-1-solid";
import { ClearInstructionEncoder } from "../ldl/instruction-class/encoders/instruction-0-clear-encoder";
import { SolidInstructionEncoder } from "../ldl/instruction-class/encoders/instruction-1-solid-encoder";
import { ProgramEncoder } from "../ldl/instruction-class/encoders/program-encoder";
import { PatternInstruction } from "../ldl/instruction-class/instruction-2-pattern";
import { SliderInstruction } from "../ldl/instruction-class/instruction-3-slider";
import { RepeatInstruction } from "../ldl/instruction-class/instruction-repeat";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  public ldlForm: FormGroup;

  InstructionType = InstructionType;

  pixel1Colour: Colour = new Colour(255, 0, 0);
  pixel2Colour: Colour = new Colour(0, 255, 0);
  pixel3Colour: Colour = new Colour(0, 0, 255);

  @ViewChild('pixel1') pixel1: PixelComponent;
  @ViewChild('duration1') duration1: DurationComponent;

  userLogin = new UserLogin();
  isLoading = false;
  formResetToggle = true;
  modalClosedCallback: () => void;
  loginStatusSubscription: any;

  @Input()
  isModal = false;

  ldlProgram: Program;


  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private configurations: ConfigurationService,
    private instructionService: InstructionService,
    private fb: FormBuilder) {
    this.ldlProgram = new Program();

    //this.ldlProgram.addInstruction(new ClearInstruction());
    //this.ldlProgram.addInstruction(new SliderInstruction());
    //this.ldlProgram.addInstruction(new SliderInstruction());
    //let repeatIns = new RepeatInstruction(instructionService);
    //this.ldlProgram.addInstruction(repeatIns);
    //let addIns = new AddInstruction(InstructionType.Slider, AddInstructionPosition.End);
    //repeatIns.addInstruction(addIns);

    this.ldlProgram.addInstruction(new ClearInstruction());
    const pattern1 = new SliderInstruction();
    pattern1.startSliderNear();
    const pattern2 = new SliderInstruction();
    pattern2.startSliderFar();
    let repeatIns = new RepeatInstruction(instructionService);
    let addIns = new AddInstruction(InstructionType.Slider, AddInstructionPosition.End);
    repeatIns.addInstruction(addIns);
    repeatIns.addInstruction(addIns);
    let slider = repeatIns.instructions[1] as SliderInstruction;
    slider.startSliderFar();


    repeatIns.addInstruction(new AddInstruction(InstructionType.Repeat, AddInstructionPosition.End));
    const secondRepeatIns = repeatIns.instructions[0] as RepeatInstruction;
    secondRepeatIns.times = 5;
    secondRepeatIns.addInstruction(addIns);
    slider = secondRepeatIns.instructions[0] as SliderInstruction;
    slider.sliderColour = new Colour(0, 0, 255);

    this.ldlProgram.addInstruction(repeatIns);
    

    //this.ldlProgram.addInstruction(new ClearInstruction());
    //const pattern1 = new SliderInstruction();
    //pattern1.startSliderNear();
    //const pattern2 = new SliderInstruction();
    //pattern2.startSliderFar();
    //let repeatIns = new RepeatInstruction(instructionService);
    //let addIns = new AddInstruction(InstructionType.Slider, AddInstructionPosition.End);
    //repeatIns.addInstruction(addIns);
    //repeatIns.addInstruction(addIns);
    //let slider = repeatIns.instructions[1] as SliderInstruction;
    //slider.startSliderFar();

    //this.ldlProgram.addInstruction(repeatIns);

    // this.ldlProgram.addInstruction(new ClearInstruction());
    // this.ldlProgram.addInstruction(new SolidInstruction());
    // this.ldlProgram.addInstruction(new PatternInstruction());
    // this.ldlProgram.addInstruction(new SliderInstruction());

    this.ldlForm = this.fb.group({
      'ip': ['192.168.1.210', [Validators.required]],
      'username': ['Super', [Validators.required]],
      'password': ['1xYa1man2*', [Validators.required]]
    });
  }


  sendLightProgram() {
    const username = this.ldlForm.value.username;
    const password = this.ldlForm.value.password;
    const ip = this.ldlForm.value.ip;

    const programEncoder = new ProgramEncoder();
    const serializedProgram = programEncoder.serialize(this.ldlProgram);

    console.log(serializedProgram);

    
    //this.instructionService.uploadLdlProgram(ip, username, password, serializedProgram)
    //  .subscribe(o => {
    //  });
    
  }


  ngOnInit() {

    this.userLogin.rememberMe = this.authService.rememberMe;

    if (this.getShouldRedirect()) {
      this.authService.redirectLoginUser();
    } else {
      this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(isLoggedIn => {
        if (this.getShouldRedirect()) {
          this.authService.redirectLoginUser();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.loginStatusSubscription) {
      this.loginStatusSubscription.unsubscribe();
    }
  }


  getShouldRedirect() {
    return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
  }


  showErrorAlert(caption: string, message: string) {
    this.alertService.showMessage(caption, message, MessageSeverity.error);
  }

  closeModal() {
    if (this.modalClosedCallback) {
      this.modalClosedCallback();
    }
  }


  login() {
    this.isLoading = true;
    this.alertService.startLoadingMessage('', 'Attempting login...');

    this.authService.login(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
      .subscribe(
        user => {
          setTimeout(() => {
            this.alertService.stopLoadingMessage();
            this.isLoading = false;
            this.reset();

            if (!this.isModal) {
              this.alertService.showMessage('Login', `Welcome ${user.userName}!`, MessageSeverity.success);
            } else {
              this.alertService.showMessage('Login', `Session for ${user.userName} restored!`, MessageSeverity.success);
              setTimeout(() => {
                this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
              }, 500);

              this.closeModal();
            }
          }, 500);
        },
        error => {

          this.alertService.stopLoadingMessage();

          if (Utilities.checkNoNetwork(error)) {
            this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
            this.offerAlternateHost();
          } else {
            const errorMessage = Utilities.getHttpResponseMessage(error);

            if (errorMessage) {
              this.alertService.showStickyMessage('Unable to login', this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
            } else {
              this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + Utilities.getResponseBody(error), MessageSeverity.error, error);
            }
          }

          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
  }


  offerAlternateHost() {

    if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
      this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
        'Would you want to temporarily switch to the online Demo API below?(Or specify another)',
        DialogType.prompt,
        (value: string) => {
          this.configurations.baseUrl = value;
          this.configurations.tokenUrl = value;
          this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
        },
        null,
        null,
        null,
        this.configurations.fallbackBaseUrl);
    }
  }


  mapLoginErrorMessage(error: string) {

    if (error == 'invalid_username_or_password') {
      return 'Invalid username or password';
    }

    if (error == 'invalid_grant') {
      return 'This account has been disabled';
    }

    return error;
  }


  reset() {
    this.formResetToggle = false;

    setTimeout(() => {
      this.formResetToggle = true;
    });
  }
}
