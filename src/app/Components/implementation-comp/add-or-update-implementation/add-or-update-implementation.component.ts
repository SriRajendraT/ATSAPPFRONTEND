import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMPLEMENTATION } from 'src/app/Models/IMPLEMENTATION.Model';
import { ImplementationApiService } from 'src/services/Api/implementation.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-add-or-update-implementation',
  templateUrl: './add-or-update-implementation.component.html',
  styleUrls: ['./add-or-update-implementation.component.css'],
})
export class AddOrUpdateImplementationComponent implements OnInit {
  implementationFormGroup: FormGroup = new FormGroup({});
  constructor(
    private implementationApi: ImplementationApiService,
    private builder: FormBuilder,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.inItForm();
    this.onView();
  }

  inItForm() {
    this.implementationFormGroup = this.builder.group({
      implementationid: [0],
      implementationname: ['', Validators.required],
    });
  }

  addOrUpdatedImplementation() {
    let implementation = this.implementationFormGroup.value as IMPLEMENTATION;
    if (implementation.implementationid != 0) {
      this.implementationApi
        .addOrUpdateImplementation(implementation)
        .subscribe((result: boolean) => {
          if (result) {
            this.onBack();
          }
        });
    } else {
      this.implementationApi
        .addOrUpdateImplementation(implementation)
        .subscribe((result: boolean) => {
          if (result) {
            this.onBack();
          }
        });
    }
  }

  onView() {
    let ch = this.storage.get('implementationbyid');
    if (ch) {
      let obj = JSON.parse(ch);
      this.implementationApi
        .getImplementationById(obj.id)
        .subscribe((result: IMPLEMENTATION) => {
          if (result) {
            this.implementationFormGroup.patchValue(result);
          }
        });
    }
  }

  onBack() {
    this.router.navigate(['/implementation']);
  }
}
