import { Component, OnInit } from '@angular/core';
import { GENDER } from 'src/app/Models/GENDER.Model';
import { BasicGetAPiService } from 'src/services/Api/basicGet.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
genders:GENDER[];

  ngOnInit(): void {
    console.log("Navigation Component");
  }
  
}
