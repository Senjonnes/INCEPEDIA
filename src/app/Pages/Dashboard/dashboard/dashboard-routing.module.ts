import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../../Pages/Dashboard/dashboard/landing/landing.module').then( m => m.LandingPageModule)
      },
      {
        path: 'buy-course',
        loadChildren: () => import('../../../Pages/Dashboard/dashboard/buy-course/buy-course.module').then( m => m.BuyCoursePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
