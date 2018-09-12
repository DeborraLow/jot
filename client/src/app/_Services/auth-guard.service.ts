import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import {AuthenticationService} from '../_Services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,  CanActivateChild {
  constructor(private authService:AuthenticationService, private router: Router) {}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.loginCheck(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  loginCheck(url:string) {
    this.authService.isLoggedIn();
    const Check = this.authService.LoggedIn;

    if(!Check) {
      this.router.navigate(['/']);
    }
    
    return Check;
  }

}
