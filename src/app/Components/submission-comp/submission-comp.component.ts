import { Component, OnInit } from '@angular/core';
import { SubmissionExt } from 'src/app/Models/SUBMISSION.Model';
import { SubmissionApiService } from 'src/services/Api/submission.service';

@Component({
  selector: 'app-submission-comp',
  templateUrl: './submission-comp.component.html',
  styleUrls: ['./submission-comp.component.css'],
})
export class SubmissionCompComponent implements OnInit {
  submissions: SubmissionExt[];
  submission: SubmissionExt;
  constructor(private submissionapi: SubmissionApiService) {}

  ngOnInit(): void {
    this.getAllSubmissions();
  }

  getAllSubmissions() {
    this.submissionapi
      .getAllSubmissions()
      .subscribe((result: SubmissionExt[]) => {
        if (result) {
          this.submissions = result;
        } else {
          this.submissions = [];
        }
      });
  }

  getSubmissionById(id: number) {
    this.submissionapi
      .getSubmissionById(id)
      .subscribe((result: SubmissionExt) => {
        if (result) {
          this.submission = result;
        }
      });
  }

  getSubmissionByName(name: string) {
    this.submissionapi
      .getSubmissionByName(name)
      .subscribe((result: SubmissionExt[]) => {
        if (result) {
          this.submissions = result;
        } else {
          this.submissions = [];
        }
      });
  }
}
