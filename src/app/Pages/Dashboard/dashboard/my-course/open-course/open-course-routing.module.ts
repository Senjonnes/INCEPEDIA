import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenCoursePage } from './open-course.page';

const routes: Routes = [
  {
    path: '',
    component: OpenCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenCoursePageRoutingModule {}
