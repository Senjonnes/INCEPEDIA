import { Component, OnInit } from '@angular/core';
import { Handlers } from 'src/Business/Constants/handlers';
import { DisplayServices } from 'src/Business/Display/displayServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  pressedOnce;
  doSaveCard

  constructor(
    public handlers: Handlers,
    public displayServices: DisplayServices,
    public router: Router
  ) {
    this.pressedOnce = false;
  }

  back() {
    this.pressedOnce = true;
    this.handlers.navBack()
  }

  login() {
    this.router.navigate(['dashboard'])
  }

  ngOnInit() {
  }

  saveCard() {

  }

}
