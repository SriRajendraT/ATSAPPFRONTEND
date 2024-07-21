import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPLOYERCOMPANY } from 'src/app/Models/EMPLOYERCOMPANY.Model';
import { EmployerCompanyApiService } from 'src/services/Api/employerCompany.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-employercompany-comp',
  templateUrl: './employercompany-comp.component.html',
  styleUrls: ['./employercompany-comp.component.css'],
})
export class EmployercompanyCompComponent implements OnInit {
  employerCompanies: EMPLOYERCOMPANY[];
  employerCompany: EMPLOYERCOMPANY;
  constructor(private empCompApi: EmployerCompanyApiService,private router:Router,private storage:StorageService) {}

  ngOnInit(): void {
    this.getAllEmployerCompanies();
  }

  getAllEmployerCompanies() {
    this.empCompApi
      .getAllEmployerCompanies()
      .subscribe((result: EMPLOYERCOMPANY[]) => {
        if (result) {
          this.employerCompanies = result;
        } else {
          this.employerCompanies = [];
        }
      });
  }

  getEmployerCompanyById(id: number) {
    this.empCompApi
      .getEmployerCompanyById(id)
      .subscribe((result: EMPLOYERCOMPANY) => {
        if (result) {
          this.employerCompany = result;
        }
      });
  }

  getEmployersByName(name: string) {
    this.empCompApi
      .getEmployerCompanyByName(name)
      .subscribe((result: EMPLOYERCOMPANY[]) => {
        if (result) {
          this.employerCompanies = result;
        } else {
          this.employerCompanies = [];
        }
      });
  }

  addOrUpdateEmployerCompany(){
    this.storage.set('employercompanybyid','');
    this.router.navigate(['/addorupdateemployercompany']);
  }
}
