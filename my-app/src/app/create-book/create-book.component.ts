import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  nombre:string="";
  autor:string="";
  fecha:string="";
  valor:number=0;
  disponible:boolean=false;
  obj:any;
  

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  createBook(){
    this.obj={
      author: this.autor,
      available: this.disponible,
      name: this.nombre,
      price: this.valor,
      publicationDate: this.fecha
    };
    this.dataService.postData(this.obj).subscribe((res)=>{
      console.log(res);
      if(res){
        alert();
      }
    })
  }

}
