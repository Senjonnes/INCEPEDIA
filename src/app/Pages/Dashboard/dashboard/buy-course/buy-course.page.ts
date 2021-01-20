import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Handlers } from 'src/Business/Constants/handlers';
import { DisplayServices } from 'src/Business/Display/displayServices';

@Component({
  selector: 'app-buy-course',
  templateUrl: './buy-course.page.html',
  styleUrls: ['./buy-course.page.scss'],
})
export class BuyCoursePage implements OnInit {

  pressedOnce;

  constructor(
    private menuCtrl: MenuController,
    public handlers: Handlers,
    public displayServices: DisplayServices
  ) {

    this.pressedOnce = false;

  }

  ngOnInit() {
  }

  back() {
    this.pressedOnce = true;
    this.handlers.navBack()
  }
  
  toggleMenu() {
    this.menuCtrl.open('dashboard-menu');
  }

}
