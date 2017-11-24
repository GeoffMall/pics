import { Inject, Injectable, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.baseUrl = `${origin}${this.baseUrl}`;
  }

}
