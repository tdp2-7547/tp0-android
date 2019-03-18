import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  idBook: string = "";

  ngOnInit() {
    this.idBook = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
