
import { CompanyHistory } from '../../app/Models/CompanyHistory';
import { CompanyInfo } from '../../app/Models/CompanyInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch, Core } from '../../app/Models/Launch';
import { LaunchpadInfos } from '../../app/Models/LaunchpadInfos';
import { LaunchpadDetails } from '../../app/Models/LaunchpadDetails';
import { DetailedCapsuleDataSpecific } from '../../app/Models/DetailedCapsuleDataSpecific';
import { DetailedCapsuleDataList } from '../../app/Models/DetailedCapsuleDataList';
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
  
  getAllCapsules(): Observable<Capsule[]> {
    const endPointUrl = `${this.baseUrl}/capsules`;
    return this.http.get<Capsule[]>(endPointUrl)
  }

  getCapsInfo(id){
    const endPointUrl = `${this.baseUrl}/parts/caps?capsule_id=${id}`;
    return this.http.get<CapsInfo[]>(endPointUrl)
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
  

  getAllDetailedCapsuleData() : Observable<DetailedCapsuleDataList[]>{
    const endPointUrl = `${this.baseUrl}/parts/caps`;
   return this.http.get<DetailedCapsuleDataList[]>(endPointUrl)
  }

  getSpecificDetailedCapsuleData(id: string) : Observable<DetailedCapsuleDataSpecific>{
    const endPointUrl = `${this.baseUrl}/parts/caps/${id}`;
   return this.http.get<DetailedCapsuleDataSpecific>(endPointUrl)
  }

  getCompanyInfo() : Observable<CompanyInfo>{
    const endPointUrl = `${this.baseUrl}/info`;
   return this.http.get<CompanyInfo>(endPointUrl)
  }

  getCompanyHistoryInfo() : Observable<CompanyHistory[]>{
    const endPointUrl = `${this.baseUrl}/info/history?order=desc`;
   return this.http.get<CompanyHistory[]>(endPointUrl)
  }

  getAllRockets() : Observable<Rocket[]>{
    const endPointUrl = `${this.baseUrl}/rockets`;
    return this.http.get<Rocket[]>(endPointUrl)
  }

  getAllCore() : Observable<Core[]>{
    const endPointUrl = `${this.baseUrl}/parts/cores`;
    return this.http.get<Core[]>(endPointUrl)
  }

  getUpcommingLaunches() : Observable<Launch[]>{
    const endPointUrl = `${this.baseUrl}/launches/upcoming`;
   return this.http.get<Launch[]>(endPointUrl)
  }

  getLaunchesFilteredByYear(year: String) : Observable<Launch[]>{
    const endPointUrl = `${this.baseUrl}/launches/?launch_year=${year}`;
   return this.http.get<Launch[]>(endPointUrl)
  }

  getLaunchesFilteredBySuccess() : Observable<Launch[]>{
    const endPointUrl = `${this.baseUrl}/launches/?launch_success=true`;
   return this.http.get<Launch[]>(endPointUrl)
  }

  getLaunchesFilteredByFailure() : Observable<Launch[]>{
    const endPointUrl = `${this.baseUrl}/launches/?launch_success=false`;
   return this.http.get<Launch[]>(endPointUrl)
  }

  
}
