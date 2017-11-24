import { BrowserModule } from '@angular/platform-browser';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { isPlatformBrowser } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'G' }),
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,

    PublicModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
