import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCoursePage } from './my-course.page';

const routes: Routes = [
  {
    path: '',
    component: MyCoursePage
  },
  {
    path: 'open-course',
    loadChildren: () => import('../../../../Pages/Dashboard/dashboard/my-course/open-course/open-course.module').then( m => m.OpenCoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCoursePageRoutingModule {}
