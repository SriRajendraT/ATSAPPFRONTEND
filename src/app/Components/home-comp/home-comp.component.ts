import { Component, OnInit } from '@angular/core';
import { ReqVisa } from 'src/app/Models/REQUIREDVISA.Model';
import { RequirementApiService } from 'src/services/Api/requirement.service';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css'],
})
export class HomeCompComponent implements OnInit {
  requirements: ReqVisa[];
  requirement: ReqVisa;
  constructor(private reqapi: RequirementApiService) {}

  ngOnInit(): void {
    this.getAllRequirements();
  }

  getAllRequirements() {
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

  getRequirementByName(name: string) {
    this.reqapi.getRequirementByName(name).subscribe((result: ReqVisa[]) => {
      if (result) {
        this.requirements = result;
      } else {
        this.requirements = [];
      }
    });
  }
}
