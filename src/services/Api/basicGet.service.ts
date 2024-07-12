import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CITY } from 'src/app/Models/CITY.Model';
import { COUNTRY } from 'src/app/Models/COUNTRY.model';
import { GENDER } from 'src/app/Models/GENDER.Model';
import { HYBRIDTYPE } from 'src/app/Models/HYBRIDTYPE.Model';
import { KeyValue } from 'src/app/Models/KeyValue';
import { STATE } from 'src/app/Models/STATE.Model';
import { SUBMISSIONSTATUS } from 'src/app/Models/SUBMISSIONSTATUS.Model';
import { TAXTERM } from 'src/app/Models/TAXTERM.Model';
import { VISA } from 'src/app/Models/VISA.Model';
import { WORKNATURE } from 'src/app/Models/WORKNATURE.Model';

@Injectable({
  providedIn: 'root',
})
export class BasicGetAPiService {
  constructor(private http: HttpClient) {}
  BasicGetAPi: string = 'https://localhost:7026/api/BasicGet/';

  getAllGenders(): Observable<GENDER[]> {
    return this.http.post<GENDER[]>(this.BasicGetAPi + 'GetGENDERS', '');
  }

  getAllCountries(): Observable<COUNTRY[]> {
    return this.http.post<COUNTRY[]>(this.BasicGetAPi + 'GetCOUNTRIES', '');
  }

  getAllStatesByCountry(id: number): Observable<STATE[]> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<STATE[]>(this.BasicGetAPi + 'GetSTATESBYCOUNTRY', kv);
  }

  getAllCityByState(id: number): Observable<CITY[]> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<CITY[]>(this.BasicGetAPi + 'GetSTATESBYCOUNTRY', kv);
  }

  getAllWorkNature(): Observable<WORKNATURE[]> {
    return this.http.post<WORKNATURE[]>(
      this.BasicGetAPi + 'GetWORKNATURES',
      ''
    );
  }

  getAllHybridTypes(): Observable<HYBRIDTYPE[]> {
    return this.http.post<HYBRIDTYPE[]>(
      this.BasicGetAPi + 'GetHYBRIDTYPES',
      ''
    );
  }

  getAllTaxTerm(): Observable<TAXTERM[]> {
    return this.http.post<TAXTERM[]>(this.BasicGetAPi + 'GetTAXTERMS', '');
  }

  getAllVisa(): Observable<VISA[]> {
    return this.http.post<VISA[]>(this.BasicGetAPi + 'GetVISAS', '');
  }

  getAllSubmissionStatus(): Observable<SUBMISSIONSTATUS[]> {
    return this.http.post<SUBMISSIONSTATUS[]>(
      this.BasicGetAPi + 'GetSUBMISSIONSTATUSES',
      ''
    );
  }
}
