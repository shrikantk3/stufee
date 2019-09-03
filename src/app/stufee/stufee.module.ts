import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StufeeRouterModule } from './stufee-routing.module';
import { StufeeAppComponent } from './stufee.component';

@NgModule({
  declarations: [StufeeAppComponent],
  imports: [
    CommonModule,
    StufeeRouterModule
  ]
})
export class StufeeModule { }
