import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './APiUrl';
import { Observable } from 'rxjs';
import { CANDIDATE, CandidateExt } from 'src/app/Models/CANDIDATE.Model';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class CandidateApiService {
  constructor(private http: HttpClient) {}
  CandidateApi: string = APIURL.link + 'Candidate/';

  getAllCandidate(): Observable<CandidateExt[]> {
    return this.http.post<CandidateExt[]>(
      this.CandidateApi + 'GetAllCandidate',
      ''
    );
  }

  getCandidateById(id: number): Observable<CandidateExt> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<CandidateExt>(
      this.CandidateApi + 'GetCandidateById',
      kv
    );
  }

  getCandidatesbyName(name: string): Observable<CandidateExt[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<CandidateExt[]>(
      this.CandidateApi + 'GetCandiatesByName',
      kv
    );
  }

  addOrUpdateCandidate(candidate: CANDIDATE): Observable<boolean> {
    return this.http.post<boolean>(
      this.CandidateApi + 'AddOrUpdateCandidate',
      candidate
    );
  }

  deleteCandidate(candidate: CANDIDATE): Observable<boolean> {
    return this.http.post<boolean>(
      this.CandidateApi + 'DeleteCandidate',
      candidate
    );
  }
}
