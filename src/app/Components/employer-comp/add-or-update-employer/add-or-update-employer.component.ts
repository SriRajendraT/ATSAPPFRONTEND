import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPLOYER, EmployerExt } from 'src/app/Models/EMPLOYER.Model';
import { EMPLOYERCOMPANY } from 'src/app/Models/EMPLOYERCOMPANY.Model';
import { EmployerApiService } from 'src/services/Api/employer.service';
import { EmployerCompanyApiService } from 'src/services/Api/employerCompany.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-add-or-update-employer',
  templateUrl: './add-or-update-employer.component.html',
  styleUrls: ['./add-or-update-employer.component.css'],
})
export class AddOrUpdateEmployerComponent implements OnInit {
  employerCompanies: EMPLOYERCOMPANY[]=[];
  employerFromGroup: FormGroup = new FormGroup({});
  constructor(
    private empApi: EmployerApiService,
    private router: Router,
    private storage: StorageService,
    private builder: FormBuilder,
    private empCompApi: EmployerCompanyApiService
  ) {}

  ngOnInit(): void {
    this.getEmployerCompanies();
    this.inItForm();
    this.onView();
  }

  inItForm() {
    this.employerFromGroup = this.builder.group({
      employerid: [0],
      employername: ['', [Validators.required]],
      employercompany: [0, [Validators.required,this.invalidZero]],
      employeremail: ['', [Validators.required, Validators.email]],
      employerphonenumber: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }
  invalidZero(c: AbstractControl) {
    const f = c.value === 0 || c.value === '0';
    return f ? { invalidZero: true } : null;
  }
  getEmployerCompanies() {
    this.empCompApi
      .getAllEmployerCompanies()
      .subscribe((result: EMPLOYERCOMPANY[]) => {
        if (result.length>0) {
          this.employerCompanies = result;
        } else {
          this.employerCompanies = [];
        }
      });
  }

  addOrUpdateEmployer() {
    let emp = this.employerFromGroup.value as EMPLOYER;
    if (emp.employerid != 0) {
      this.empApi.addOrUpdateEmployer(emp).subscribe((result: boolean) => {
        if (result) {
          this.onBack();
        }
      });
    } else {
      this.empApi.addOrUpdateEmployer(emp).subscribe((result: boolean) => {
        if (result) {
          this.onBack();
        }
      });
    }
  }

  onView() {
    let ch = this.storage.get('employerbyid');
    if (ch) {
      let obj = JSON.parse(ch);
      this.empApi.getEmployerById(obj.id).subscribe((result: EmployerExt) => {
        if (result) {
          this.employerFromGroup.patchValue(result);
        } 
      });
    }
  }

  onBack() {
    this.router.navigate(['/employer']);
  }
}
