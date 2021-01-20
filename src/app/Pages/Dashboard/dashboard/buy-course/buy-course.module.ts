import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyCoursePageRoutingModule } from './buy-course-routing.module';

import { BuyCoursePage } from './buy-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyCoursePageRoutingModule
  ],
  declarations: [BuyCoursePage]
})
export class BuyCoursePageModule {}
