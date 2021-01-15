import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayServices } from '../../Display/displayServices';
import { Dashboard } from "../../Models/Dashboard/dashboard";
import { FormValidations } from '../../Forms/formsDirectives';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../../Error/http-error-handler.service';
import { SharedData } from './shared.components';
import { SessionSettings } from '../../Session/session';
 // this includes the core NgIdleModule but includes keepalive providers for easy wireup



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    Dashboard,
    DisplayServices,
    FormValidations,
    FormBuilder,
    HttpErrorHandler,
    SharedData,
    SessionSettings
  ]
  
})
export class SharedservicesModule { }
