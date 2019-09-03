import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const _router:Routes =[
    {path:'', component: AdminDashboardComponent},
  ];

export const AdminRouterModule = RouterModule.forChild(_router);