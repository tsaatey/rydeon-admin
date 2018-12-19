import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, public router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated())
      this.router.navigate(['/user-auth/login']);
    return true;
  }
}
