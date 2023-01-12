import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(public oidcSecurityService: OidcSecurityService) { if(!this.oidcSecurityService.isAuthenticated)
    {
      this.oidcSecurityService.authorize();
    }}

  ngOnInit() {
    if(!this.oidcSecurityService.isAuthenticated)
    {
      this.oidcSecurityService.authorize();
    }
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      /*...*/
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }

  gettoken() {
    this.oidcSecurityService.getAccessToken().subscribe((result) => console.log(result));
  }
 
  getUserData() {
      this.oidcSecurityService.userData$.subscribe((result) => console.log(result));
  }
}