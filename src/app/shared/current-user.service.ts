import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AuthenticationService} from "../user-auth/authentication.service";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CurrentUserService {

  constructor(private httpClient: HttpClient, private auth: AuthenticationService, private apiService: ApiService) {
    // this.fetchCurrentUserData();
  }

  fetchCurrentUserData() {
    // const helper = new JwtHelperService();
    // const decodedToken = helper.decodeToken(this.auth.getToken());
    // const sub = decodedToken.get('sub');
    // const id = sub.get('id');npm

    return this.httpClient.get(this.apiService.current_user)
      .pipe(map((response: HttpResponse<any>) => {
        const result = response['result'];
        localStorage.setItem('firstname', result['firstname']);
        localStorage.setItem('lastname', result['lastname']);
        localStorage.setItem('image', result['image']);
        return result;
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }));
  }

}
