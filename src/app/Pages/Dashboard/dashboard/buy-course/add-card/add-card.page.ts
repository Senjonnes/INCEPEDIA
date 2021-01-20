import { Component, OnInit } from '@angular/core';
import { Handlers } from 'src/Business/Constants/handlers';
import { DisplayServices } from 'src/Business/Display/displayServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {

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
