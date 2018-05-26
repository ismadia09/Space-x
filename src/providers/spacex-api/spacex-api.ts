import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../app/Models/Launch';
import { LaunchpadInfos } from '../../app/Models/LaunchpadInfos';
import { LaunchpadDetails } from '../../app/Models/LaunchpadDetails';


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

  getAllLaunchpadInfos() : Observable<LaunchpadInfos[]>{
    const endPointUrl = `${this.baseUrl}/launchpads`;
   return this.http.get<LaunchpadInfos[]>(endPointUrl)
  }

  getLaunchpadDetails(id: string) : Observable<LaunchpadDetails>{
    const endPointUrl = `${this.baseUrl}/launchpads/${id}`;
    return this.http.get<LaunchpadDetails>(endPointUrl)
  }

}
