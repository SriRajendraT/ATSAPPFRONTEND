import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './APiUrl';
import { Observable } from 'rxjs';
import { EMPLOYERCOMPANY } from 'src/app/Models/EMPLOYERCOMPANY.Model';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class EmployerCompanyApiService {
  constructor(private http: HttpClient) {}
  EmployerCompanyApi: string = APIURL.link + 'EmployerCompany/';

  getAllEmployerCompanies(): Observable<EMPLOYERCOMPANY[]> {
    return this.http.post<EMPLOYERCOMPANY[]>(
      this.EmployerCompanyApi + 'GetAllEmployerCompanies',
      ''
    );
  }

  getEmployerCompanyById(id: number): Observable<EMPLOYERCOMPANY> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<EMPLOYERCOMPANY>(
      this.EmployerCompanyApi + 'GetEmployerCompanyById',
      kv
    );
  }

  getEmployerCompanyByName(name: string): Observable<EMPLOYERCOMPANY[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<EMPLOYERCOMPANY[]>(
      this.EmployerCompanyApi + 'GetEmployerCompaniesByName',
      kv
    );
  }

  addOrUpdateEmployerCompany(
    employerCompany: EMPLOYERCOMPANY
  ): Observable<boolean> {
    return this.http.post<boolean>(
      this.EmployerCompanyApi + 'AddOrUpdateEmployerCompany',
      employerCompany
    );
  }

  deleteEmployerCompany(employerCompany: EMPLOYERCOMPANY): Observable<boolean> {
    return this.http.post<boolean>(
      this.EmployerCompanyApi + 'DeleteEmployerCompany',
      employerCompany
    );
  }
}
