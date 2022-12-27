import { Component, Inject, OnInit, OnDestroy, NgZone } from "@angular/core";
import { PublisherSettings } from "./publisher-settings";

@Component({
  selector: 'app-ldl-program-blockly-publisher',
  templateUrl: './program-blockly-publisher.component.html'
})
export class ProgramBlockyPublisherComponent {
  publish = false;
  store = false;


  constructor(
  ) {
  }


  handleCloseDialog(doPublish: boolean) {
    let publisherSettings = new PublisherSettings();
    publisherSettings.publish = doPublish;
    publisherSettings.store = this.store;

    return publisherSettings;
  }

}
