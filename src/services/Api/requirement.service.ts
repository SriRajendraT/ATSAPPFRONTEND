import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './APiUrl';
import { Observable } from 'rxjs';
import { ReqVisa } from 'src/app/Models/REQUIREDVISA.Model';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class RequirementApiService {
  constructor(private http: HttpClient) {}
  RequirementApi: string = APIURL.link + 'Requirement/';

  getAllRequirements(): Observable<ReqVisa[]> {
    return this.http.post<ReqVisa[]>(
      this.RequirementApi + 'GetAllRequirements',
      ''
    );
  }

  getRequirementById(id: number): Observable<ReqVisa> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<ReqVisa>(
      this.RequirementApi + 'GetRequirementById',
      kv
    );
  }

  getRequirementByName(name: string): Observable<ReqVisa[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<ReqVisa[]>(
      this.RequirementApi + 'GetRequirementByName',
      kv
    );
  }

  addOrUpdateRequirement(reqVisa: ReqVisa): Observable<boolean> {
    return this.http.post<boolean>(
      this.RequirementApi + 'AddOrUpdateRequirement',
      reqVisa
    );
  }

  deleteRequirement(reqVisa: ReqVisa): Observable<boolean> {
    return this.http.post<boolean>(
      this.RequirementApi + 'DeleteRequirement',
      reqVisa
    );
  }
}
