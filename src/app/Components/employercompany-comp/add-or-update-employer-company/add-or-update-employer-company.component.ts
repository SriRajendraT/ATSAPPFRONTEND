import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPLOYERCOMPANY } from 'src/app/Models/EMPLOYERCOMPANY.Model';
import { EmployerCompanyApiService } from 'src/services/Api/employerCompany.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-add-or-update-employer-company',
  templateUrl: './add-or-update-employer-company.component.html',
  styleUrls: ['./add-or-update-employer-company.component.css'],
})
export class AddOrUpdateEmployerCompanyComponent implements OnInit {
  empCompFormGroup: FormGroup = new FormGroup({});
  constructor(
    private empCompApi: EmployerCompanyApiService,
    private router: Router,
    private storage: StorageService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inItForm();
    this.onView();
  }

  inItForm(){
    this.empCompFormGroup=this.builder.group({
      employercompanyid:[0],
      employercompanyname:['',Validators.required]
    });
  }

  addOrUpdateEmployerCompany(){
    let empComp = this.empCompFormGroup.value as EMPLOYERCOMPANY;
    if(empComp.employercompanyid!=0){
      this.empCompApi.addOrUpdateEmployerCompany(empComp).subscribe((result:boolean)=>{
        if(result){this.onBack();}
      });
    }else{
      this.empCompApi.addOrUpdateEmployerCompany(empComp).subscribe((result:boolean)=>{
        if(result){this.onBack();}
      });
    }
  }

  onView() {
    let ch = this.storage.get('employercompanybyid');
    if (ch) {
      let obj = JSON.parse(ch);
      this.empCompApi
        .getEmployerCompanyById(obj.id)
        .subscribe((result: EMPLOYERCOMPANY) => {
          if (result) {
            this.empCompFormGroup.patchValue(result);
          }
        });
    }
  }

  onBack() {
    this.router.navigate(['/employercompany']);
  }
}
