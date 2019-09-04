import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../../auth.guard'
const _router:Routes =[
    {path:'', component: AdminDashboardComponent, canActivate:[AuthGuard]},
  ];

export const AdminRouterModule = RouterModule.forChild(_router);