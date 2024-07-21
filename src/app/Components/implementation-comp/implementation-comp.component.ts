import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMPLEMENTATION } from 'src/app/Models/IMPLEMENTATION.Model';
import { ImplementationApiService } from 'src/services/Api/implementation.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-implementation-comp',
  templateUrl: './implementation-comp.component.html',
  styleUrls: ['./implementation-comp.component.css'],
})
export class ImplementationCompComponent implements OnInit {
  implementations: IMPLEMENTATION[];
  implementation: IMPLEMENTATION;
  constructor(
    private implementationapi: ImplementationApiService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.getAllImplementation();
  }

  getAllImplementation() {
    this.implementationapi
      .getAllImplementations()
      .subscribe((result: IMPLEMENTATION[]) => {
        if (result) {
          this.implementations = result;
        } else {
          this.implementations = [];
        }
      });
  }

  getImplementationById(id: number) {
    this.implementationapi
      .getImplementationById(id)
      .subscribe((result: IMPLEMENTATION) => {
        if (result) {
          this.implementation = result;
        }
      });
  }

  getImplementationByName(name: string) {
    this.implementationapi
      .getImpentationsByName(name)
      .subscribe((result: IMPLEMENTATION[]) => {
        if (result) {
          this.implementations = result;
        } else {
          this.implementations = [];
        }
      });
  }

  addOrUpdateImplementation(){
    this.storage.set('implementationbyid','');
    this.router.navigate(['/addorupdateimplementation']);
  }

  onEdit(id:number){
    this.storage.set('implementationbyid',JSON.stringify({id:id,isView:false}));
    this.router.navigate(['/addorupdateimplementation']);
  }
}
