import { Component, OnInit } from '@angular/core';
import { BookService } from './book-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() { }


}
