import { Component, OnInit } from '@angular/core';
import { CandidateExt } from 'src/app/Models/CANDIDATE.Model';
import { CandidateApiService } from 'src/services/Api/candidate.service';

@Component({
  selector: 'app-candidate-comp',
  templateUrl: './candidate-comp.component.html',
  styleUrls: ['./candidate-comp.component.css'],
})
export class CandidateCompComponent implements OnInit {
  candidates: CandidateExt[];
  candidate: CandidateExt;
  constructor(private candidateApi: CandidateApiService) {}

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates() {
    this.candidateApi.getAllCandidate().subscribe((result: CandidateExt[]) => {
      if (result) {
        this.candidates = result;
      } else {
        this.candidates = [];
      }
    });
  }

  getCandidateById(id: number) {
    this.candidateApi.getCandidateById(id).subscribe((result: CandidateExt) => {
      if (result) {
        this.candidate = result;
      }
    });
  }

  getCandidatesByName(name: string) {
    this.candidateApi
      .getCandidatesbyName(name)
      .subscribe((result: CandidateExt[]) => {
        if (result) {
          this.candidates = result;
        } else {
          this.candidates = [];
        }
      });
  }
}
