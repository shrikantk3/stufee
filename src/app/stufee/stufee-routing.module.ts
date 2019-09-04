import {Routes, RouterModule} from '@angular/router';
import { StufeeAppComponent } from './stufee.component';
const _router:Routes =[
    { path:'', 
      component:StufeeAppComponent,
      children:[    
        {
          path:'admin', 
          loadChildren:()=> import('./admin/admin.module').then(a=> a.AdminModule) 
        },
        {
          path:'teacher', 
          loadChildren: ()=> import('./teacher/teacher.module').then(t=>t.TeacherModule)
        },
        {
          path:'user', 
          loadChildren:()=> import('./student/student.module').then(s=>s.StudentModule)
        }
    ]}
];

export const StufeeRouterModule = RouterModule.forChild(_router);