
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) {

  }

  getEmployees(role: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.httpClient.get(this.apiService.find_user + role, {headers: headers})
      .pipe(map((response: HttpResponse<any>) => {
        return response;
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }))
  }

  deleteEmployee(id: number) {
    // Body yet to be implemented
  }

}
