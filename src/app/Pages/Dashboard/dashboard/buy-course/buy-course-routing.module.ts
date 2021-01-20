import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyCoursePage } from './buy-course.page';

const routes: Routes = [
  {
    path: '',
    component: BuyCoursePage
  },
  {
    path: 'add-card',
    loadChildren: () => import('../../../../Pages/Dashboard/dashboard/buy-course/add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('../../../../Pages/Dashboard/dashboard/buy-course/payment/payment.module').then( m => m.PaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyCoursePageRoutingModule {}
