import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../_Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,  CanActivateChild {
  constructor(private authService:AuthenticationService) {}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
    return this.loginCheck(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }

  loginCheck(url:string) {
    return this.authService.isLoggedIn();
  }

}
