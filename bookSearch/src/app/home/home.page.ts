import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    private http: HttpClient,
    private router: Router,
    ){}
  
  HTTPREQUEST: string ="http://localhost:3000/books/";
  searchText: string = "";
  pageNumber: number = 0;

  updateText(ev: any){
    this.searchText = ev.target.value;
    console.log(this.searchText);
  }

  getItems(){
    this.getBooks();
    this.router.navigate(['/search-list', this.searchText]);
  }

  getBooks(){
    //hard
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.get(this.HTTPREQUEST+this.searchText+"/"+this.pageNumber, {headers: headers})
    .subscribe( data =>{
      console.log(data)
    })
  }

  nextPage(){
    this.pageNumber ++;
  }



}
