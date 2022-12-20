import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
     private loginService: LoginService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // throw new Error('Method not implemented.');
    if(!this.loginService.isUserLoggedIn()){
      alert("Belum login. Silahkan login dulu..");
      this.router.navigate(['login'], {queryParams: {lastURL: route.url}});
      return false;
    }
    return true;
  }
}
