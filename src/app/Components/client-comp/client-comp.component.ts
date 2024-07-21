import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLIENT } from 'src/app/Models/CLIENT.Model';
import { ClientApiService } from 'src/services/Api/client.service';
import { StorageService } from 'src/services/storage-service/storage.service';

@Component({
  selector: 'app-client-comp',
  templateUrl: './client-comp.component.html',
  styleUrls: ['./client-comp.component.css'],
})
export class ClientCompComponent implements OnInit {
  clients: CLIENT[];
  client: CLIENT;
  constructor(
    private clientApi: ClientApiService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.clientApi.getAllClients().subscribe((result: CLIENT[]) => {
      if (result) {
        this.clients = result;
      } else {
        this.clients = [];
      }
    });
  }

  getClientById(id: number) {
    this.clientApi.getClientById(id).subscribe((result: CLIENT) => {
      if (result) {
        this.client = result;
      }
    });
  }

  getClientsByName(name: string) {
    this.clientApi.getClientByName(name).subscribe((result: CLIENT[]) => {
      if (result) {
        this.clients = result;
      } else {
        this.clients = [];
      }
    });
  }

  addOrUpdateClient(){
    this.storage.set('clientbyid','');
    this.router.navigate(['/addorupdateClient']);
  }

  onEdit(id:number){
    this.storage.set('clientbyid',JSON.stringify({id:id,isView:false}));
    this.router.navigate(['/addorupdateClient']);
  }
  
}
