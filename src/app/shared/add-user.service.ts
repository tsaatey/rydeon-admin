import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AddUserService {

  constructor(private httpClient: HttpClient, private apiService: ApiService){}

  public createUserAccount(data: any) {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json')
    return this.httpClient.post(this.apiService.create_user, data, {headers: header})
      .pipe(map((response: HttpResponse<any>) =>{
        return response['message'];
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }))
  }

}
