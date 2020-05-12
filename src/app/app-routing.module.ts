import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './extra/error-page/error-page.component'
const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'auth' },
  {path:'auth', loadChildren:'./auth/auth.module#AuthModule'},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule]
})



export class AppRoutingModule { }
