import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-comp',
  templateUrl: './nav-comp.component.html',
  styleUrls: ['./nav-comp.component.css'],
})
export class NavCompComponent implements OnInit {
  isCollapsed = true;
  constructor() {}

  ngOnInit(): void {}

  menuClick():void {
    this.isCollapsed = !this.isCollapsed;
  }
}
