import { NgModule } from '@angular/core';
import { Config } from './url';
import { Encryption } from '../encryption/encryption';
import { SharedservicesModule } from '../../Shared/sharedservices/sharedservices.module'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Constants } from '../../Constants/constants';
import { Handlers } from '../../Constants/handlers';

@NgModule({
    declarations: [],
    imports: [SharedservicesModule],
    providers: [Config, Encryption, HttpClient, Constants, Handlers],
})

export class CoreModule { };