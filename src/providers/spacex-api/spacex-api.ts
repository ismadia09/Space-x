import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch, Core } from '../../app/Models/Launch';
import { Rocket } from '../../app/Models/Rocket';

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

  getAllRockets() : Observable<Rocket[]>{
    const endPointUrl = `${this.baseUrl}/rockets`;
    return this.http.get<Rocket[]>(endPointUrl)
  }

  getAllCore() : Observable<Core[]>{
    const endPointUrl = `${this.baseUrl}/parts/cores`;
    return this.http.get<Core[]>(endPointUrl)
  }

}
