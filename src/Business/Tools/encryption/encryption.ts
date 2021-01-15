
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()

export class Encryption {

    protected encrypt;
    protected decrypt;
    constructor() {
        this.encrypt = {
            base64Key: '2b7e151738aed2a6abf7158809cf4f3c',
            iv: '3ad77bb90d7a3770a89ecaf32466ef97'
        };

        this.decrypt = {
            base64Key: '2b7e151738aed2a6abf7158809cf4f3c',
            iv: '3ad77bb90d7a3770a89ecaf32466ef97'
        };
    }

    encryptData(value) {
        try {
            const base64Key = this.encrypt.base64Key;
            let encryptedValue = CryptoJS.AES.encrypt(value, base64Key);
            encryptedValue = encryptedValue.toString();
            return encryptedValue;
        } catch (e) {
            // console.log(e);
        }
    }



    decryptData(value) {
        try {
            const base64Key = this.decrypt.base64Key;
            let bytes = CryptoJS.AES.decrypt(value, base64Key);
            let decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
            return decryptedValue;
        }
        catch (e) {
            // console.log(e);
        }
    }
}
