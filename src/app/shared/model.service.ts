import {Injectable} from "@angular/core";
import {Model} from "./model.model";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ModelService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  addModel(makeId, modelName) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.httpClient.post(this.apiService.car_model + '?makeId=' + makeId + '&modelName=' + modelName, '', { headers:headers })
      .pipe(map((response: HttpResponse<any>) => {
        return response;
      })).pipe(catchError(error => {
        return Observable.throwError(error);
      }));;
  }

  getModels(makeId: any) {
    return this.httpClient.get(this.apiService.car_model + '?makeId=' + makeId)
      .pipe(map((response: HttpResponse<any>) => {
        return response['result'];
      })).pipe(catchError(err => {
        return Observable.throwError(err);
      }));
  }
}
