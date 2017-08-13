import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(".button-collapse").sideNav(); 
  }

}
