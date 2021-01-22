import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Handlers } from 'src/Business/Constants/handlers';
import { DisplayServices } from 'src/Business/Display/displayServices';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.page.html',
  styleUrls: ['./my-course.page.scss'],
})
export class MyCoursePage implements OnInit {

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
