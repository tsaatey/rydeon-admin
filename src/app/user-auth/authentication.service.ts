import {Injectable} from "@angular/core";
import {HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    const helper = new JwtHelperService();

    if (token) {
      return !helper.isTokenExpired(token);
    }
    return false;

  }

  cachedRequests: Array<HttpRequest<any>> = [];

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
