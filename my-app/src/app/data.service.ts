import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { data } from './data';
import {Book} from './interfaces/Book.interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {
    console.log("service is working");
   }

   getData(){
     return this.httpClient.get<Book[]>('http://localhost:8090/api/library/book/all')
   }

   postData(obj:any){
     console.log(obj);
     return this.httpClient.post('http://localhost:8090/api/library/book/save',obj)
   }
}
