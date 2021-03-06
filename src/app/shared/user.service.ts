
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Rx";

@Injectable()
export class User2Service {

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  getUsers(role: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.httpClient.get(this.apiService.find_user, {headers: headers, params: role})
      .pipe(map((response: HttpResponse<any>) => {
        return response;
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }))
  }
  //
  // findUser(data: string){
  //   return this.users[data];
  // }

}
