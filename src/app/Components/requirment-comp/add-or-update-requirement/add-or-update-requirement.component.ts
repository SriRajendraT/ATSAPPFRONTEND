import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CITY } from 'src/app/Models/CITY.Model';
import { COUNTRY } from 'src/app/Models/COUNTRY.model';
import { HYBRIDTYPE } from 'src/app/Models/HYBRIDTYPE.Model';
import { STATE } from 'src/app/Models/STATE.Model';
import { VISA } from 'src/app/Models/VISA.Model';
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
  worknature: WORKNATURE[];
  hybridTypes: HYBRIDTYPE[];
  countries: COUNTRY[];
  states: STATE[];
  cities: CITY[];
  visas: VISA[];
  requirmentFormGroup: FormGroup = new FormGroup({});

  constructor(
    private bgetApi: BasicGetAPiService,
    private reqApi: RequirementApiService,
    private router: Router,
    private storage: StorageService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllVisas();
    this.getAllCountries();
    this.getAllWn();
    this.inItForm();
  }

  getAllVisas() {
    this.bgetApi.getAllVisa().subscribe((result: VISA[]) => {
      if (result) {
        this.visas = result;
      } else {
        this.visas = [];
      }
    });
  }

  getAllWn() {
    this.bgetApi.getAllWorkNature().subscribe((result: WORKNATURE[]) => {
      if (result) {
        this.worknature = result;
      } else {
        this.worknature = [];
      }
    });
  }

  changeHybridTypebywnId(event: any) {
    var id = parseInt(
      (event.target.value ?? '') == '' ? '0' : event.target.value
    );
    this.getHybridTypeBySelectedWN(id);
  }

  getHybridTypeBySelectedWN(id: number) {
    this.requirmentFormGroup.controls['requirmenthybridtype'].setValue(0);
    if (id == 3) {
      this.bgetApi.getAllHybridTypes().subscribe((result: HYBRIDTYPE[]) => {
        if (result) {
          this.hybridTypes = result;
        }
      });
    } else {
      this.hybridTypes = [];
      this.requirmentFormGroup.controls['requirmenthybridtype'].disable();
    }
  }

  getAllCountries() {
    this.bgetApi.getAllCountries().subscribe((result: COUNTRY[]) => {
      if (result) {
        this.countries = result;
      } else {
        this.countries = [];
      }
    });
  }

  changeStatesByCountryId(event: any) {
    var countryid = parseInt(
      (event.target.value ?? '') == '' ? '0' : event.target.value
    );
    this.getStatesByCountryId(countryid);
  }

  getStatesByCountryId(id: number) {
    this.requirmentFormGroup.controls['requirmentlocstate'].setValue(0);
    if (id > 0) {
      this.bgetApi.getAllStatesByCountry(id).subscribe((result: STATE[]) => {
        if (result) {
          this.states = result;
        } else {
          this.states = [];
        }
      });
    } else {
      this.states = [];
      this.requirmentFormGroup.controls['requirmentlocstate'].disable();
    }
  }

  changeCitiesByStateId(event: any) {
    var stateid = parseInt(
      (event.target.value ?? '') == '' ? '0' : event.target.value
    );
    this.getCitiesByStateId(stateid);
  }

  getCitiesByStateId(id: number) {
    this.requirmentFormGroup.controls['requirmentloccity'].setValue(0);
    if (id > 0) {
      this.bgetApi.getAllCityByState(id).subscribe((result: CITY[]) => {
        if (result) {
          this.cities = result;
        } else {
          this.cities = [];
        }
      });
    } else {
      this.cities = [];
      this.requirmentFormGroup.controls['requirmentloccity'].disable();
    }
  }

  inItForm() {
    this.requirmentFormGroup = this.builder.group({
      requirementid: [0],
      requirementtitle: ['', [Validators.required]],
      requirmentdesc: ['', [Validators.required]],
      requirementmaxrate: [0.0],
      requirmentwn: [0, [Validators.required]],
      requirmenthybridtype: [0],
      requirementimplementation: [0],
      requirementclient: [0],
      requirementloccountry: [0],
      requirmentlocstate: [0],
      requirmentloccity: [0],
    });
    this.requirmentFormGroup.controls['requirmenthybridtype'].disable();
    this.requirmentFormGroup.controls['requirmentlocstate'].disable();
    this.requirmentFormGroup.controls['requirmentloccity'].disable();
  }

  invalidZero(c: AbstractControl) {
    const f = c.value === 0 || c.value === '0';
    return f ? { invalidZero: true } : null;
  }

  onBack() {
    this.router.navigate(['/requirement']);
  }
}
