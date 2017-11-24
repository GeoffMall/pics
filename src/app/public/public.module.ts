import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { PublicComponent } from './public.component';
import { SkateboardComponent } from './skateboard/skateboard.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MathComponent } from './math/math.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    PublicRoutingModule
  ],
  declarations: [
    NavbarComponent,
    PublicComponent,
    SkateboardComponent,
    CryptoComponent,
    MathComponent
  ]
})
export class PublicModule {
}
