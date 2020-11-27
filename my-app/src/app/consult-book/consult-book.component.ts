import { Component, OnInit } from '@angular/core';
import {Book} from '../interfaces/Book.interface';
import { DataService } from '../data.service';
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-consult-book',
  templateUrl: './consult-book.component.html',
  styleUrls: ['./consult-book.component.css']
})
export class ConsultBookComponent implements OnInit {
  lstBooks:Book[]=[];

  constructor(private dataService:DataService) { 
    this.dataService.getData().subscribe((data)=>{
      this.lstBooks=data;
    });
  }

  ngOnInit(): void {
  }

}
