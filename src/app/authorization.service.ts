import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthorizationService {

  _authorize = new BehaviorSubject<boolean>(false);
  get authorize() { return this._authorize.value; }
  set authorize(v) { this._authorize.next(v); }

  constructor() {
    // change authorization value every 10 seconds
    setInterval(() => this.authorize = !this.authorize, 10000);
  }

}
