import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { DisplayServices } from '../Display/displayServices'
import { Router } from '@angular/router';
import { Constants } from '../Constants/constants';
import { SharedData } from '../Shared/sharedservices/shared.components';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class SessionSettings {
    idleState = 'Not started.';
    timedOut = false;
    min: any;
    sec: any;
    lastPing?: Date = null;
    public countDown;
    public idleStartTime;
    public timeoutTime;
    public currentTime;

    constructor(
        private platform: Platform,
        public alertController: AlertController,
        public idle: Idle,
        public keepalive: Keepalive,
        public displayServices: DisplayServices,
        public router: Router,
        public constants: Constants,
        public sharedData: SharedData,
    ) {

        // this.sessionTiming()
        // sets an idle timeout of 5 seconds, for testing purposes.
        // idle.setIdle(5);
        idle.setIdle(1);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        // idle.setTimeout(10);
        idle.setTimeout(150);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        idle.onIdleEnd.subscribe(() => { this.idleState = 'No longer idle.'; console.log(this.idleState); });
        idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;

            // console.log(this.idleState);
            // this.router.navigate(['/login']);  // return to login page

        });

        idle.onIdleStart.subscribe(() => {

            this.idleStartTime = new Date().getTime() / 1000;
            this.timeoutTime = this.idleStartTime + 150;

            this.idleState = 'You\'ve gone idle!'; console.log(this.idleState);

        });
        idle.onTimeoutWarning.subscribe(async (countdown) => {
            this.idleState = 'You will time out in ' + countdown + ' seconds!';
            // console.log(this.idleState)

            if (this.platform.is('cordova')) {
                if (this.platform.is('ios')) {
                    if ((new Date().getTime() / 1000) >= this.timeoutTime) {
                        this.doLogout();
                        let req = await this.displayServices.confirmAwaitResponse("Head", "Body", this.constants.responseMsgs().OK);
                        if (req) {
                            this.displayServices.dismissAlert();
                        }
                    }
                }
            }

            if (countdown === 20) {
                this.displayServices.showAlert("Your session will timeout in " + countdown + "seconds", "Head");
            }

            if (countdown <= 1) {
                this.doLogout();
                let req = await this.displayServices.confirmAwaitResponse("Bosy", "Head", this.constants.responseMsgs().OK);
                if (req) {
                    this.displayServices.dismissAlert();
                }
            }
        }
        );

        // sets the ping interval to 15 seconds
        keepalive.interval(15);

        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        // console.log(this.idleState);
        this.reset();
        this.stop();
    }

    // sessionTiming() {


    public reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }

    public stop() {
        this.idle.stop();
        console.log("idle paused indefinitely")
        this.idleState = 'Pause.';
        this.timedOut = false;
    }

    doLogout() {
        // this.logoutService.Logout().subscribe();
        this.router.navigate(['/login']);
    }
}
