import { Component, OnInit } from '@angular/core';
import { Handlers } from 'src/Business/Constants/handlers';
import { DisplayServices } from 'src/Business/Display/displayServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  pressedOnce;

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

}
