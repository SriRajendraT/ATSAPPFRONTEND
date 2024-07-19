import { Component, OnInit } from '@angular/core';
import { CLIENT } from 'src/app/Models/CLIENT.Model';
import { ClientApiService } from 'src/services/Api/client.service';

@Component({
  selector: 'app-client-comp',
  templateUrl: './client-comp.component.html',
  styleUrls: ['./client-comp.component.css'],
})
export class ClientCompComponent implements OnInit {
  clients: CLIENT[];
  client: CLIENT;
  constructor(private clientApi: ClientApiService) {}

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
}
