import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../app/Models/Launch';


/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {

  baseUrl = "https://api.spacexdata.com/v2";
  constructor(private http: HttpClient) {
    
  }

  getAllLaunches() : Observable<Launch[]>{
    const endPointUrl = `${this.baseUrl}/launches/all`;
   return this.http.get<Launch[]>(endPointUrl)
  }

  getNextLaunch(): Observable<Launch> {
    const endPointUrl = `${this.baseUrl}/launches/next`;
    return this.http.get<Launch>(endPointUrl)
  }

}
