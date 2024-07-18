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

const routes: Routes = [
  {path:'',component:HomeCompComponent},
  {path:'requirement',component:RequirmentCompComponent},
  {path:'client',component:ClientCompComponent},
  {path:'candidate',component:CandidateCompComponent},
  {path:'employer',component:EmployerCompComponent},
  {path:'employercompany',component:EmployercompanyCompComponent},
  {path:'implementation',component:ImplementationCompComponent},
  {path:'submission',component:SubmissionCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
