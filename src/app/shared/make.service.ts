import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MakeService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  addMake(make: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'text/plain');

    return this.httpClient.post(this.apiService.make + '?make=' + make, '', { headers: headers })
      .pipe(map((response: HttpResponse<any>) => {
        return response;
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }));
  }

  getMakes() {
    return this.httpClient.get(this.apiService.make)
      .pipe(map((response: HttpResponse<any>) => {
        return response['result'];
      })).pipe(catchError(error => {
        return Observable.throwError(error);
      }));
  }
}
