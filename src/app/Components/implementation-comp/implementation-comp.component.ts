import { Component, OnInit } from '@angular/core';
import { IMPLEMENTATION } from 'src/app/Models/IMPLEMENTATION.Model';
import { ImplementationApiService } from 'src/services/Api/implementation.service';

@Component({
  selector: 'app-implementation-comp',
  templateUrl: './implementation-comp.component.html',
  styleUrls: ['./implementation-comp.component.css'],
})
export class ImplementationCompComponent implements OnInit {
  implementations: IMPLEMENTATION[];
  implementation: IMPLEMENTATION;
  constructor(private implementationapi: ImplementationApiService) {}

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
}
