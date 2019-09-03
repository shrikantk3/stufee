import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { SchoolAdminComponent } from './school-admin.component'

const routes:Routes = [
    {path:'',
     component:SchoolAdminComponent, 
     children:[
        {path:'', component:DashboardComponent}
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SchoolAdminRoujtingModule{

}