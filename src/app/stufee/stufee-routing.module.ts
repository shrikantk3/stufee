import {Routes, RouterModule} from '@angular/router';
import { StufeeAppComponent } from './stufee.component';
const _router:Routes =[
    { path:'', 
      component:StufeeAppComponent,
      children:[    
        {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
        {path:'teacher', loadChildren:'./teacher/teacher.module#TeacherModule'},
        {path:'user', loadChildren:'./student/student.module#StudentModule'}
    ]}
];

export const StufeeRouterModule = RouterModule.forChild(_router);