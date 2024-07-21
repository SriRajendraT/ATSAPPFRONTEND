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
import { CandidateCompComponent } from './Components/candidate-comp/candidate-comp.component';
import { RequirmentCompComponent } from './Components/requirment-comp/requirment-comp.component';
import { SubmissionCompComponent } from './Components/submission-comp/submission-comp.component';
import { NavCompComponent } from './Components/nav-comp/nav-comp.component';
import { HomeCompComponent } from './Components/home-comp/home-comp.component';
import { ClientCompComponent } from './Components/client-comp/client-comp.component';
import { EmployerCompComponent } from './Components/employer-comp/employer-comp.component';
import { EmployercompanyCompComponent } from './Components/employercompany-comp/employercompany-comp.component';
import { ImplementationCompComponent } from './Components/implementation-comp/implementation-comp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOrUpdateClientComponent } from './Components/client-comp/add-or-update-client/add-or-update-client.component';
import { AddOrUpdateImplementationComponent } from './Components/implementation-comp/add-or-update-implementation/add-or-update-implementation.component';
import { AddOrUpdateEmployerCompanyComponent } from './Components/employercompany-comp/add-or-update-employer-company/add-or-update-employer-company.component';
import { AddOrUpdateEmployerComponent } from './Components/employer-comp/add-or-update-employer/add-or-update-employer.component';
import { AddOrUpdateRequirementComponent } from './Components/requirment-comp/add-or-update-requirement/add-or-update-requirement.component';
import { AddOrUpdateCandidateComponent } from './Components/candidate-comp/add-or-update-candidate/add-or-update-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateCompComponent,
    RequirmentCompComponent,
    SubmissionCompComponent,
    NavCompComponent,
    HomeCompComponent,
    ClientCompComponent,
    EmployerCompComponent,
    EmployercompanyCompComponent,
    ImplementationCompComponent,
    AddOrUpdateClientComponent,
    AddOrUpdateImplementationComponent,
    AddOrUpdateEmployerCompanyComponent,
    AddOrUpdateEmployerComponent,
    AddOrUpdateRequirementComponent,
    AddOrUpdateCandidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
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
