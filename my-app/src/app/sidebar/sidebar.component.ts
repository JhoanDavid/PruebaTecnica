import { Component, OnInit } from '@angular/core';
import { SidebarMenu } from '../interfaces/sidebarMenu.interface'

@Component({
  selector: 'Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  MenuItems:SidebarMenu []=[
    {path:"/createbook",
    title:"Crear Libro"},
    {path:"/consultbook",
    title:"Consultar Libros"},
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}