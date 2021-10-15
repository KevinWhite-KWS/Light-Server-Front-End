import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { NgxElectronModule } from 'ngx-electron';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from "./material.module";

import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';

import { AppComponent } from './app.component';

import { ProgramBlocklyComponent } from "./ldl/program-blockly.component";
import { ProgramBlockySettingsComponent } from "./ldl/program-blockly-settings.component";

import { InstructionService } from "./ldl/instruction-class/instruction-service";


// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent, 
    ProgramBlocklyComponent,
    ProgramBlockySettingsComponent
  ],

  // entryComponents: [
  //   ProgramBlockySettingsComponent
  // ],

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    DetailModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),


    NgxElectronModule,
    MaterialModule
  ],
  providers: [
    /* LDL */
    InstructionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
