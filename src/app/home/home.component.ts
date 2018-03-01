import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // @ViewChild('toto', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('complete') complete: TemplateRef<any>;
  @ViewChild('complete2') complete2: TemplateRef<any>;

  books;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    this.books = this._activatedRoute.snapshot.data['books'];
  }

  ngAfterViewInit() {
    this.vcr.createEmbeddedView(this.complete2);
    this.vcr.createEmbeddedView(this.complete);
  }

  clear() {
    // this.vcr.remove(0);
    this.vcr.clear();
  }

}
