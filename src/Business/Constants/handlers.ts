import { ActivatedRoute, Router, ParamMap, NavigationExtras } from '@angular/router';
import { DisplayServices } from '../../Business/Display/displayServices';
import { Constants } from './constants';
import { SharedData } from '../Shared/sharedservices/shared.components';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class Handlers {

    removeLoader;

    constructor(
        public router: Router,
        public displayServices: DisplayServices,
        public constants: Constants,
        public sharedData: SharedData,
        public navCtrl: NavController,
    ) { }

    navBack() {
        this.navCtrl.back()
    }
}
