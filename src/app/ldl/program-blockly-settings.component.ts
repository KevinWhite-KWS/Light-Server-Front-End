import { Component, Inject, OnInit, OnDestroy, NgZone } from "@angular/core";
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from "rxjs";

import { ConnectionSettings } from "./connection-settings";
import { InstructionService } from "./instruction-class/instruction-service";
import { LdlServer } from "./ldl-server";

@Component({
    selector: 'app-ldl-program-blockly-settings',
    templateUrl: './program-blockly-settings.component.html'
  })
export class ProgramBlockySettingsComponent implements OnInit, OnDestroy  {

  ldlServers: LdlServer[];

  findingServers = false;
  noServersFound = false;

  discoverServersSub: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConnectionSettings,
    private instructionService: InstructionService,
    private _ngZone: NgZone
  ) {

  }

  ngOnInit(): void {
    this.discoverServersSub = this.instructionService.onDiscoveredLdlServers.subscribe((discoveredServers: LdlServer[]) => {
      this._ngZone.run(() => {
        this.findingServers = false;
        this.noServersFound = discoveredServers.length === 0;
        this.ldlServers = discoveredServers;

        this.data.servers = discoveredServers;
      });
    });
    this.findingServers = true;
    this.instructionService.discoverServers();
  }

  ngOnDestroy(): void {
    if (this.discoverServersSub) {
      this.discoverServersSub.unsubscribe();
    }
  }
}
