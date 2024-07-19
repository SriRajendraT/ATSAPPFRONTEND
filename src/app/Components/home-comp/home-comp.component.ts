import { Component, OnInit } from '@angular/core';
import { ReqVisa } from 'src/app/Models/REQUIREDVISA.Model';
import { SubmissionExt } from 'src/app/Models/SUBMISSION.Model';
import { RequirementApiService } from 'src/services/Api/requirement.service';
import { SubmissionApiService } from 'src/services/Api/submission.service';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css'],
})
export class HomeCompComponent implements OnInit {
  countOfReq: number = 0;
  noOfSubmission: number = 0;

  constructor(
    private reqapi: RequirementApiService,
    private subapi: SubmissionApiService
  ) {}

  ngOnInit(): void {
    this.getAllRequirements();
    this.getAllSubmissions();
  }

  getAllRequirements() {
    this.reqapi.getAllRequirements().subscribe((result: ReqVisa[]) => {
      if (result) {
        this.countOfReq = result.length;
      } else {
        this.countOfReq = 0;
      }
    });
  }

  getAllSubmissions() {
    this.subapi.getAllSubmissions().subscribe((result: SubmissionExt[]) => {
      if (result) {
        this.noOfSubmission = result.length;
      } else {
        this.noOfSubmission = 0;
      }
    });
  }
}
