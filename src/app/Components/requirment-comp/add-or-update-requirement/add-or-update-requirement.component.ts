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
import { CLIENT } from 'src/app/Models/CLIENT.Model';
import { COUNTRY } from 'src/app/Models/COUNTRY.model';
import { HYBRIDTYPE } from 'src/app/Models/HYBRIDTYPE.Model';
import { IMPLEMENTATION } from 'src/app/Models/IMPLEMENTATION.Model';
import { ReqVisa } from 'src/app/Models/REQUIREDVISA.Model';
import { REQUIREMENT, RequirementExt } from 'src/app/Models/REQUIREMENT.Model';
import { STATE } from 'src/app/Models/STATE.Model';
import { VISA } from 'src/app/Models/VISA.Model';
import { WORKNATURE } from 'src/app/Models/WORKNATURE.Model';
import { BasicGetAPiService } from 'src/services/Api/basicGet.service';
import { ClientApiService } from 'src/services/Api/client.service';
import { ImplementationApiService } from 'src/services/Api/implementation.service';
import { RequirementApiService } from 'src/services/Api/requirement.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-add-or-update-requirement',
  templateUrl: './add-or-update-requirement.component.html',
  styleUrls: ['./add-or-update-requirement.component.css'],
})
export class AddOrUpdateRequirementComponent implements OnInit {
  worknatures: WORKNATURE[];
  hybridTypes: HYBRIDTYPE[];
  countries: COUNTRY[];
  states: STATE[];
  cities: CITY[];
  visas: VISA[];
  weeklyrate: number = 0;
  montlyrate: number = 0;
  yearlyrate: number = 0;
  implementations: IMPLEMENTATION[];
  clients: CLIENT[];
  hidehybridtype: boolean = true;
  requirmentFormGroup: FormGroup = new FormGroup({});

  constructor(
    private bgetApi: BasicGetAPiService,
    private reqApi: RequirementApiService,
    private router: Router,
    private storage: StorageService,
    private builder: FormBuilder,
    private impleApi: ImplementationApiService,
    private cliApi: ClientApiService
  ) {}

  ngOnInit(): void {
    this.inItForm();
    this.getAllImplementations();
    this.getAllClients();
    this.getAllVisas();
    this.getAllCountries();
    this.getAllWn();
  }

  getAllImplementations() {
    this.impleApi
      .getAllImplementations()
      .subscribe((result: IMPLEMENTATION[]) => {
        if (result) {
          this.implementations = result;
        } else {
          this.implementations = result;
        }
      });
  }

  getAllClients() {
    this.cliApi.getAllClients().subscribe((result: CLIENT[]) => {
      if (result) {
        this.clients = result;
      } else {
        this.clients = [];
      }
    });
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
        this.worknatures = result;
      } else {
        this.worknatures = [];
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
    if (id != 3) {
      this.hidehybridtype = !this.hidehybridtype;
      this.hybridTypes = [];
    } else {
      this.hidehybridtype = !this.hidehybridtype;
      this.bgetApi.getAllHybridTypes().subscribe((result: HYBRIDTYPE[]) => {
        if (result) {
          this.hybridTypes = result;
        }
      });
    }
  }

  getAllCountries() {
    this.bgetApi.getAllCountries().subscribe((result: COUNTRY[]) => {
      if (result) {
        this.countries = result;
      } else {
        this.countries = [];
        this.requirmentFormGroup.controls['requirmentloccity'].disable();
        this.requirmentFormGroup.controls['requirmentloccity'].setValue(0);
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
    this.requirmentFormGroup.controls['requirmentlocstate'].enable();
    this.requirmentFormGroup.controls['requirmentlocstate'].setValue(0);
    if (id > 0) {
      this.bgetApi.getAllStatesByCountry(id).subscribe((result: STATE[]) => {
        if (result) {
          this.states = result;
        } else {
          this.states = [];
          this.requirmentFormGroup.controls['requirmentloccity'].disable();
        }
      });
    } else {
      this.states = [];
      this.requirmentFormGroup.controls['requirmentlocstate'].disable();
      this.requirmentFormGroup.controls['requirmentloccity'].disable();
      this.requirmentFormGroup.controls['requirmentloccity'].setValue(0);
    }
  }

  changeCitiesByStateId(event: any) {
    var stateid = parseInt(
      (event.target.value ?? '') == '' ? '0' : event.target.value
    );
    this.getCitiesByStateId(stateid);
  }

  getCitiesByStateId(id: number) {
    this.requirmentFormGroup.controls['requirmentloccity'].enable();
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
    this.requirmentFormGroup.controls['requirmentlocstate'].disable();
    this.requirmentFormGroup.controls['requirmentloccity'].disable();
  }

  invalidZero(c: AbstractControl) {
    const f = c.value === 0 || c.value === '0';
    return f ? { invalidZero: true } : null;
  }

  changeHourlytoweekly(event: any) {
    var hourlyrate = parseFloat(
      (event.target.value ?? '') == '' ? '0' : event.target.value
    );
    this.calculateWeekly(hourlyrate);
  }

  calculateWeekly(rate: number) {
    if (rate > 0) {
      this.weeklyrate = rate * 45;
      this.calculatemonthly(this.weeklyrate);
    } else {
      this.weeklyrate = 0;
      this.calculatemonthly(this.weeklyrate);
    }
  }

  calculatemonthly(rate: number) {
    if (rate > 0) {
      this.montlyrate = rate * 4;
      this.calculateyearly(this.montlyrate);
    } else {
      this.montlyrate = 0;
      this.calculateyearly(this.montlyrate);
    }
  }

  calculateyearly(rate: number) {
    if (rate > 0) {
      this.yearlyrate = rate * 12;
    } else {
      this.yearlyrate = 0;
    }
  }

  addOrUpdateRequirement() {
    var req = new ReqVisa();
    req.requirement = this.requirmentFormGroup.value as RequirementExt;
    if (req.requirement.requirementid != 0) {
      this.reqApi.addOrUpdateRequirement(req).subscribe((result: boolean) => {
        if (result) {
          this.onBack();
        }
      });
    } else {
      this.reqApi.addOrUpdateRequirement(req).subscribe((result: boolean) => {
        if (result) {
          this.onBack();
        }
      });
    }
  }

  onBack() {
    this.router.navigate(['/requirement']);
  }
}
