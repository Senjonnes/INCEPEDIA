import { Injectable } from '@angular/core';

@Injectable()

export class Config {

    private host = '';
    private base = '';
    private scheme = 'https:';
    private port = '';

    Url() {
        const base = this.scheme + this.host + this.port + this.base;
        console.log(base);
        return base;
    }
}