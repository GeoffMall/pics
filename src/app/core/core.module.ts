import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from './crypto.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CryptoService
  ]
})
export class CoreModule { }
