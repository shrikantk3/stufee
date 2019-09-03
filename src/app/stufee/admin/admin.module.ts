import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRouterModule } from './admin-routing.module'


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRouterModule 
  ] 
})
export class AdminModule { }
