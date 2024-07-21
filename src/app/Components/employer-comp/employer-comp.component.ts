import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerExt } from 'src/app/Models/EMPLOYER.Model';
import { EmployerApiService } from 'src/services/Api/employer.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-employer-comp',
  templateUrl: './employer-comp.component.html',
  styleUrls: ['./employer-comp.component.css'],
})
export class EmployerCompComponent implements OnInit {
  employers: EmployerExt[];
  employer: EmployerExt;
  constructor(private empapi: EmployerApiService,private router:Router,private storage:StorageService) {}

  ngOnInit(): void {
    this.getAllEmployers();
  }

  getAllEmployers() {
    this.empapi.getAllEmployers().subscribe((result: EmployerExt[]) => {
      if (result) {
        this.employers = result;
      } else {
        this.employers = [];
      }
    });
  }

  getEmployerById(id: number) {
    this.empapi.getEmployerById(id).subscribe((result: EmployerExt) => {
      if (result) {
        this.employer = result;
      }
    });
  }

  getEmployersByName(name: string) {
    this.empapi.getEmployersByName(name).subscribe((result: EmployerExt[]) => {
      if (result) {
        this.employers = result;
      } else {
        this.employers = [];
      }
    });
  }

  addOrUpdateEmployer(){
    this.storage.set('employerbyid','');
    this.router.navigate(['/addorupdateemployer']);
  }
}
