import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Logo:String;
  constructor() {
    this.Logo='/assets/Logo.png';
   }

  ngOnInit(): void {
  }

}
