import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WORKNATURE } from 'src/app/Models/WORKNATURE.Model';
import { BasicGetAPiService } from 'src/services/Api/basicGet.service';
import { RequirementApiService } from 'src/services/Api/requirement.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-add-or-update-requirement',
  templateUrl: './add-or-update-requirement.component.html',
  styleUrls: ['./add-or-update-requirement.component.css'],
})
export class AddOrUpdateRequirementComponent implements OnInit {
  worknature:WORKNATURE[];
  requirmentFormGroup: FormGroup = new FormGroup({});

  constructor(
    private bgetApi: BasicGetAPiService,
    private reqApi: RequirementApiService,
    private router: Router,
    private storage: StorageService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllWn();
    this.inItForm();
  }

  getAllWn(){
    this.bgetApi.getAllWorkNature().subscribe((result:WORKNATURE[])=>{
      if(result){
        this.worknature=result;
      }else{
        this.worknature=[];
      }
    });
  }

  inItForm() {
    this.requirmentFormGroup = this.builder.group({
      requirementid:[0],
      requirementtitle:['',[Validators.required]],
      requirmentdesc:['',[Validators.required]],
      requirementmaxrate:[0.0],
      requirmentwn:[0,[Validators.required]],
      requirmenthybridtype:[0],
      requirementimplementation:[0],
      requirementclient:[0],
      requirementloccountry:[0],
      requirmentlocstate:[0],
      requirmentloccity:[0]
    });
    this.requirmentFormGroup.controls['requirmenthybridtype'].disable();
  }

  invalidZero(c: AbstractControl) {
    const f = c.value === 0 || c.value === '0';
    return f ? { invalidZero: true } : null;
  }

  onBack(){
    this.router.navigate(['/requirement']);
  }
}
