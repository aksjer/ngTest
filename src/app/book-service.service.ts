import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class BookService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  search(term: string): Observable<any> {
    const params = new HttpParams().set('q', term);
    return this._httpClient
      .get(environment.apiUrl, { params });
  }

}


// interface A {
//   a: string;
// }
// interface B {
//   b: string;
// }
// type haha = A | B;
// const ab: haha = { a: '15' };
// const bb: haha = { b: '15' };
// const cb: haha = { c: '15' }; // error
