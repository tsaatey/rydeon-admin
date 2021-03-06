import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  getRoles() {
    return this.httpClient.get(this.apiService.user_role)
      .pipe(map((response: HttpResponse<any>) => {
        return response;
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }));
  }

  public assignRoles(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.httpClient.post(this.apiService.assign_role, data, {headers: headers})
      .pipe(map((response: HttpResponse<any>) => {
        return response;
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }))
  }
}
