import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BookService } from './book-service.service';

@Injectable()
export class BookResolverService implements Resolve<any>{

  constructor(
    private _bookService: BookService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._bookService
      .search('harry')
      .map(e => e.items.reduce((acc, item) => acc.concat(item.volumeInfo), []));
  }

}
