import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from './Components/home-comp/home-comp.component';
import { RequirmentCompComponent } from './Components/requirment-comp/requirment-comp.component';
import { ClientCompComponent } from './Components/client-comp/client-comp.component';
import { CandidateCompComponent } from './Components/candidate-comp/candidate-comp.component';
import { EmployerCompComponent } from './Components/employer-comp/employer-comp.component';
import { EmployercompanyCompComponent } from './Components/employercompany-comp/employercompany-comp.component';
import { ImplementationCompComponent } from './Components/implementation-comp/implementation-comp.component';
import { SubmissionCompComponent } from './Components/submission-comp/submission-comp.component';
import { AddOrUpdateClientComponent } from './Components/client-comp/add-or-update-client/add-or-update-client.component';
import { AddOrUpdateImplementationComponent } from './Components/implementation-comp/add-or-update-implementation/add-or-update-implementation.component';
import { AddOrUpdateEmployerCompanyComponent } from './Components/employercompany-comp/add-or-update-employer-company/add-or-update-employer-company.component';
import { AddOrUpdateEmployerComponent } from './Components/employer-comp/add-or-update-employer/add-or-update-employer.component';
import { AddOrUpdateRequirementComponent } from './Components/requirment-comp/add-or-update-requirement/add-or-update-requirement.component';
import { AddOrUpdateCandidateComponent } from './Components/candidate-comp/add-or-update-candidate/add-or-update-candidate.component';

const routes: Routes = [
  { path: '', component: HomeCompComponent },
  { path: 'requirement', component: RequirmentCompComponent },
  {
    path: 'addOrUpdateRequirement',
    component: AddOrUpdateRequirementComponent,
  },
  { path: 'client', component: ClientCompComponent },
  { path: 'addorupdateClient', component: AddOrUpdateClientComponent },
  { path: 'candidate', component: CandidateCompComponent },
  { path: 'addorupdatecandidate', component: AddOrUpdateCandidateComponent },
  { path: 'employer', component: EmployerCompComponent },
  { path: 'addorupdateemployer', component: AddOrUpdateEmployerComponent },
  { path: 'employercompany', component: EmployercompanyCompComponent },
  {
    path: 'addorupdateemployercompany',
    component: AddOrUpdateEmployerCompanyComponent,
  },
  { path: 'implementation', component: ImplementationCompComponent },
  {
    path: 'addorupdateimplementation',
    component: AddOrUpdateImplementationComponent,
  },
  { path: 'submission', component: SubmissionCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
