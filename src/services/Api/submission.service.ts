import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SUBMISSION, SubmissionExt } from 'src/app/Models/SUBMISSION.Model';
import { APIURL } from './APiUrl';
import { KeyValue } from 'src/app/Models/KeyValue';

@Injectable({
  providedIn: 'root',
})
export class SubmissionApiService {
  constructor(private http: HttpClient) {}
  SubmissionApi: string = APIURL.link + 'Submission/';

  getAllSubmissions(): Observable<SubmissionExt[]> {
    return this.http.post<SubmissionExt[]>(
      this.SubmissionApi + 'GetAllSubmissions',
      ''
    );
  }

  getSubmissionById(id: number): Observable<SubmissionExt> {
    var kv = new KeyValue();
    kv.key1 = id;
    return this.http.post<SubmissionExt>(
      this.SubmissionApi + 'GetSumissionById',
      kv
    );
  }

  getSubmissionByName(name: string): Observable<SubmissionExt[]> {
    var kv = new KeyValue();
    kv.value1 = name;
    return this.http.post<SubmissionExt[]>(
      this.SubmissionApi + 'GetSubmissionsByNames',
      kv
    );
  }

  addOrUpdateSubmission(submission: SUBMISSION): Observable<boolean> {
    return this.http.post<boolean>(
      this.SubmissionApi + 'AddOrUpdateSubmission',
      submission
    );
  }

  deleteSubmission(submission: SUBMISSION): Observable<boolean> {
    return this.http.post<boolean>(
      this.SubmissionApi + 'DeleteSubmission',
      submission
    );
  }
}
