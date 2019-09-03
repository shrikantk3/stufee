import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolAdminRoujtingModule } from './school-admin-routing.module'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    HttpClientModule,
    SchoolAdminRoujtingModule
  ]
})
export class SchoolAdminModule { }
