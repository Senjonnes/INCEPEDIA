import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCoursePageRoutingModule } from './my-course-routing.module';

import { MyCoursePage } from './my-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCoursePageRoutingModule
  ],
  declarations: [MyCoursePage]
})
export class MyCoursePageModule {}
