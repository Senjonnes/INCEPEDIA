import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenCoursePageRoutingModule } from './open-course-routing.module';

import { OpenCoursePage } from './open-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenCoursePageRoutingModule
  ],
  declarations: [OpenCoursePage]
})
export class OpenCoursePageModule {}
