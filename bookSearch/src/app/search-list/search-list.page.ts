import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {

  constructor( private activatedRoute : ActivatedRoute, private http: HttpClient) { }

  HTTPREQUEST: string ="http://localhost:3000/books/";
  searchText: string = "java";
  pageNumber: number = 0;
  books: any;

  ngOnInit() {
    this.searchText = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('llego parametro: ' + this.searchText);
    this.getBooks();
  }

  getBooks(){
    //hard
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.get(this.HTTPREQUEST+this.searchText+"/"+this.pageNumber, {headers: headers})
    .subscribe( data =>{
      this.books = data;
    })
  }

}
