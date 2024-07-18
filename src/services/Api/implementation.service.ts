import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './APiUrl';
import { Observable } from 'rxjs';
import { IMPLEMENTATION } from 'src/app/Models/IMPLEMENTATION.Model';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class ImplementationApiService {
  constructor(private http: HttpClient) {}
  ImplementationApi: string = APIURL.link + 'Implementation/';

  getAllImplementations(): Observable<IMPLEMENTATION[]> {
    return this.http.post<IMPLEMENTATION[]>(
      this.ImplementationApi + 'GetAllImplementation',
      ''
    );
  }

  getImplementationById(id: number): Observable<IMPLEMENTATION> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<IMPLEMENTATION>(
      this.ImplementationApi + 'GetImplementationById',
      kv
    );
  }

  getImpentationsByName(name: string): Observable<IMPLEMENTATION[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<IMPLEMENTATION[]>(
      this.ImplementationApi + 'GetImplementationByName',
      kv
    );
  }

  addOrUpdateImplementation(
    implementation: IMPLEMENTATION
  ): Observable<boolean> {
    return this.http.post<boolean>(
      this.ImplementationApi + 'AddOrUpdateImplementation',
      implementation
    );
  }

  deleteImplementation(implementation: IMPLEMENTATION): Observable<boolean> {
    return this.http.post<boolean>(
      this.ImplementationApi + 'DeleteImplementation',
      implementation
    );
  }
}
