import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYER, EmployerExt } from 'src/app/Models/EMPLOYER.Model';
import { APIURL } from './APiUrl';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class EmployerApiService {
  constructor(private http: HttpClient) {}
  EmployerApi: string = APIURL.link + 'Employer/';

  getAllEmployers(): Observable<EmployerExt[]> {
    return this.http.post<EmployerExt[]>(
      this.EmployerApi + 'GetAllEmployers',
      ''
    );
  }

  getEmployerById(id: number): Observable<EmployerExt> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<EmployerExt>(
      this.EmployerApi + 'GetEmployerById',
      kv
    );
  }

  getEmployersByName(name: string): Observable<EmployerExt[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<EmployerExt[]>(
      this.EmployerApi + 'GetEmployersByName',
      kv
    );
  }

  addOrUpdateEmployer(employer: EMPLOYER): Observable<boolean> {
    return this.http.post<boolean>(
      this.EmployerApi + 'AddOrUpdateEmployer',
      employer
    );
  }

  deleteEmployer(employer: EMPLOYER): Observable<boolean> {
    return this.http.post<boolean>(
      this.EmployerApi + 'DeleteEmployer',
      employer
    );
  }
}
