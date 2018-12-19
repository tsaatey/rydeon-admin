import {Injectable} from "@angular/core";
import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs/Observable";
import {Router} from "@angular/router";
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService, public route: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'x-auth-token': this.auth.getToken()
      }

    });
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
        // this.route.navigate(['/pages/dashboard'])
      }
    },(err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
          this.route.navigate(['/user-auth/login'])
        }
      }
    });
  }
}
