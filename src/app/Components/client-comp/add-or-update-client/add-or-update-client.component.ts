import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CLIENT } from 'src/app/Models/CLIENT.Model';
import { ClientApiService } from 'src/services/Api/client.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-add-or-update-client',
  templateUrl: './add-or-update-client.component.html',
  styleUrls: ['./add-or-update-client.component.css'],
})
export class AddOrUpdateClientComponent implements OnInit {
  clientFormGroup: FormGroup = new FormGroup({});

  constructor(
    private clientApi: ClientApiService,
    private builder: FormBuilder,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.inItForm();
    this.onView();
  }

  inItForm() {
    this.clientFormGroup = this.builder.group({
      clientid: [0],
      clientname: ['', [Validators.required]],
    });
  }

  addOrUpdateClient() {
    let client = this.clientFormGroup.value as CLIENT;
    if (client.clientid != 0) {
      this.clientApi.addOrUpdateClient(client).subscribe((result: boolean) => {
        if (result) {          
          this.onBack();
        }
      });
    } else {
      this.clientApi.addOrUpdateClient(client).subscribe((result: boolean) => {
        if (result) {
          this.onBack();
        }
      });
    }
  }

  onView(){
    let ch=this.storage.get('clientbyid');
    if(ch){
      let obj= JSON.parse(ch);
      this.clientApi.getClientById(obj.id).subscribe((result:CLIENT)=>{
        if(result){
          this.clientFormGroup.patchValue(result);
        }
      });
    }
  }

  onBack() {
    this.router.navigate(['/client']);
  }
}
