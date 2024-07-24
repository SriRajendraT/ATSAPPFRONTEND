import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReqVisa } from 'src/app/Models/REQUIREDVISA.Model';
import { RequirementApiService } from 'src/services/Api/requirement.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-requirment-comp',
  templateUrl: './requirment-comp.component.html',
  styleUrls: ['./requirment-comp.component.css'],
})
export class RequirmentCompComponent implements OnInit {
  requirements: ReqVisa[];
  requirement: ReqVisa;
  constructor(private reqapi: RequirementApiService,private router:Router,private storage:StorageService) {}

  ngOnInit(): void {
    this.getAllRequiremets();
  }

  getAllRequiremets() {
    this.reqapi.getAllRequirements().subscribe((result: ReqVisa[]) => {
      if (result) {
        this.requirements = result;
      } else {
        this.requirements = [];
      }
    });
  }

  getRequirementById(id: number) {
    this.reqapi.getRequirementById(id).subscribe((result: ReqVisa) => {
      if (result) {
        this.requirement = result;
      }
    });
  }

  getRequirementsByName(name: string) {
    this.reqapi.getRequirementByName(name).subscribe((result: ReqVisa[]) => {
      if (result) {
        this.requirements = result;
      } else {
        this.requirements = [];
      }
    });
  }

  addOrUpdateRequirement(){
    this.storage.set('requirementbyid','');
    this.router.navigate(['/addOrUpdateRequirement']);
  }

  onEdit(id:number){
    this.storage.set('requirementbyid',JSON.stringify({id:id,isView:false}));
    this.router.navigate(['/addorupdateimplementation']);
  }
}
