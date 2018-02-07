import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {

  // Observable _menuW source
  private _menuW = new BehaviorSubject<number>(10);

  // menuWidth stream
  menuWidth$ = this._menuW.asObservable();

  // function
  editMenuWidth(number) {
    this._menuW.next(number);
  }

}
