import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './admin.component'


const routes: Routes = [
  {path:'stufee',  loadChildren:'./school-admin/school-admin.module#SchoolAdminModule' },
  {path:'user', loadChildren:'./student/student.module#StudentModule' },
  {path:'teacher', loadChildren:'./teacher/teacher.module#TeacherModule' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class AdminRoutingModule { }
