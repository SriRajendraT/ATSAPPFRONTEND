import { Component, OnInit } from '@angular/core';
import { EmployerApiService } from 'src/services/Api/employer.service';

@Component({
  selector: 'app-employer-comp',
  templateUrl: './employer-comp.component.html',
  styleUrls: ['./employer-comp.component.css']
})
export class EmployerCompComponent implements OnInit {

  constructor(private empapi:EmployerApiService) { }

  ngOnInit(): void {
  }

}
