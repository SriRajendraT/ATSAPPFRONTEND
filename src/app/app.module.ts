import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BasicGetAPiService } from 'src/services/Api/basicGet.service';
import { CandidateApiService } from 'src/services/Api/candidate.service';
import { ClientApiService } from 'src/services/Api/client.service';
import { EmployerApiService } from 'src/services/Api/employer.service';
import { EmployerCompanyApiService } from 'src/services/Api/employerCompany.service';
import { ImplementationApiService } from 'src/services/Api/implementation.service';
import { RequirementApiService } from 'src/services/Api/requirement.service';
import { SubmissionApiService } from 'src/services/Api/submission.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    BasicGetAPiService,
    CandidateApiService,
    ClientApiService,
    EmployerApiService,
    EmployerCompanyApiService,
    ImplementationApiService,
    RequirementApiService,
    SubmissionApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
