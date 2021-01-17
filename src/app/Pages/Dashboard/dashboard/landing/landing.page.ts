import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  accounts;

  constructor(
    private menuCtrl: MenuController,
  ) {

    this.accounts = [
      {
        accountName: "Odeyemi Oluwaseun",
        accountType: "SA",
        accountNumber: '6322580622',
        accountBalance: "6,620,000"
      },
      {
        accountName: "Odeyemi Oluwaseun",
        accountType: "CA",
        accountNumber: '5050175856',
        accountBalance: "5,620,000"
      }
    ]

  }

  ngOnInit() {
  }
  
  toggleMenu() {
    this.menuCtrl.open('dashboard-menu');
  }

}
