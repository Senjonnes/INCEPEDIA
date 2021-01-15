import { HttpHeaders } from '@angular/common/http';
import { Config } from '../Tools/Url/url';
import { Injectable } from '@angular/core';

@Injectable()

export class Constants extends Config {

    constructor() {
        super()
    }

    httpHeader() {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return headers;
    }

    baseUrl() {
        return super.Url()
    }

    //PATHS
    urlpaths() {
        const paths = {
            auth: '/users/auths',
            swift: '/users/swiftaction/signup',
            changeDevice: '/users/unlockdevice',
        }
        return paths;
    }

    responseMsgs() {
        const respmsg = {
            specialCharacters: /[!@#€£$%^&*()_+\-=\[\]{};'`:"\\|,.<>\/?]+/,
            OK: "OK",
            Cancel: 'Cancel',
            Close: "Close",
            Success: 'Success',
            Message: 'Message',
            Notice: 'Notice!!!',
            Error: 'Error',
            Ok: 'OK',
            Yes: 'Yes',
            No: 'No',
            Agree: 'Agree',
            confirm: 'Confirm',
            cancel: "Cancel",
        }
        return respmsg;
    }
}
