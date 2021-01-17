import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  menu;
  route;

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private navCtrl: NavController,
  ) {
    this.actions();
    this.route = this.router.url; 
  }

  ngOnInit() {
  }

  logout() {

  }

  toggleMenu(m) {
    this.menuCtrl.toggle('dashboard-menu'); 
    if (m && m.url === '/home') {
      this.router.navigate([m.url]);
    } else if (m && m.url) {
      this.router.navigate([m.url]);
    }
  }

  async ionViewWillEnter(){
    this.menuCtrl.enable(true, 'dashboard-menu');
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(false, 'dashboard-menu');
  }

  actions() {
    this.menu = [
      {
        id: "1", name: "Find a course", url: ""
      },
      {
        id: "2", name: "My courses", url: ""
      },
      {
        id: "3", name: "Library", url: ""
      },
      {
        id: "4", name: "Classroom", url: ""
      },
      {
        id: "5", name: "Assignment", url: ""
      },
      {
        id: "6", name: "Discussion", url: ""
      },
      {
        id: "7", name: "Test", url: ""
      },
      {
        id: "9", name: "Settings", url: ""
      },
      {
        id: "10", name: "Support", url: ""
      },
    ]
  }

}
