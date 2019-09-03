import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { AppComponent } from './admin.component'
import { RouterModule, Router } from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ],
  bootstrap:[AppComponent]
})
export class AdminModule { }
