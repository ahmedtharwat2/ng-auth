import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationGuard } from './authorization.guard';
import { HomeComponent } from './home/home.component';
// import 'decl.d.ts';
@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://demo.duendesoftware.com/',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'interactive.public.short',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 