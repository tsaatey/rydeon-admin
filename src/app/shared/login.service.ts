import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/throw";
import {throwError} from "rxjs";

@Injectable()
export class LoginService {

  endPoint = this.apiService.log_in;

  constructor(private http: Http, private apiService: ApiService) {

  }

  login(username: string, password: string) {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const params = {username: username, password: password};

    return this.http.post(this.endPoint, '', {headers: headers, params: params})
      .pipe(
        map((response: Response) => {
          return response.headers.get('x-auth-token');
        })).pipe(
        catchError((err: any) => {
          return Observable.throwError(err);
        })
      );
  }
}
