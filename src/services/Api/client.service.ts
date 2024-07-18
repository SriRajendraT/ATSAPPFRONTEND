import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './APiUrl';
import { Observable } from 'rxjs';
import { CLIENT } from 'src/app/Models/CLIENT.Model';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class ClientApiService {
  constructor(private http: HttpClient) {}
  ClientApi: string = APIURL.link + 'Client/';

  getAllClients(): Observable<CLIENT[]> {
    return this.http.post<CLIENT[]>(this.ClientApi + 'GetAllClients', '');
  }

  getClientById(id: number): Observable<CLIENT> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<CLIENT>(this.ClientApi + 'GetClientById', kv);
  }

  getClientByName(name: string): Observable<CLIENT[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<CLIENT[]>(this.ClientApi + 'GetClientsByName', kv);
  }

  addOrUpdateClient(client: CLIENT): Observable<boolean> {
    return this.http.post<boolean>(
      this.ClientApi + 'AddOrUpdateClient',
      client
    );
  }

  deleteClient(client: CLIENT): Observable<boolean> {
    return this.http.post<boolean>(this.ClientApi + 'DeleteClient', client);
  }
}
