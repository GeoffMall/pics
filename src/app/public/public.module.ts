import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    PublicRoutingModule
  ],
  declarations: [
    NavbarComponent,
    PublicComponent
  ]
})
export class PublicModule {
}
