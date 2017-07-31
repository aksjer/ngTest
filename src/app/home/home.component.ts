import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.books = this._activatedRoute.snapshot.data['books'];
  }

}
