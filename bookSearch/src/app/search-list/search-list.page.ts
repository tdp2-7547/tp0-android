import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {
  
  private searchText

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchText = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('llego parametro: ' + this.searchText);
    
  }

}
