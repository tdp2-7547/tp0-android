import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {

  constructor( private activatedRoute : ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  HTTPREQUEST: string ="http://localhost:3000/books/";
  searchText: string = "";
  pageNumber: number = 0;
  books=[];

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
      console.log(this.books.length);
      this.books = this.books.concat(data);
    });
  }

  loadData(event){
    setTimeout(() => {
      this.pageNumber++;
      this.getBooks();
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.pageNumber > 30) {
        //event.target.disabled = true;
      }
    }, 1000);
  }

  goUp(){
    //hacer algo para que suba
  }

  showBookDetails(idBook){
    this.router.navigate(['/book-detail', idBook]);    
  }

  downloadFile(url){
    window.open(url);
  }

}
