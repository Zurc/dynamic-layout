import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {
  // Menu width configuration
  initialMenuWidth = 10;
  // how many pixels the menu will expand
  MenuWidthPixelsChanged = 20;

  menuW: number;
  menuOpen = false;
  mainW: number;

  // Observable _menuW source
  private _menuW = new BehaviorSubject<number>(this.initialMenuWidth);
  private _mainW = new BehaviorSubject<number>(80);

  // menuWidth stream
  menuWidth$ = this._menuW.asObservable();
  mainWidth$ = this._mainW.asObservable();

  constructor() {
    this.menuWidth$.subscribe(
      value => this.menuW = value
    );
    this.mainWidth$.subscribe(
      value => this.mainW = value
    );
  }

  // function
  toggleMenuWidth() {
    this.menuW === this.initialMenuWidth ?
      (this.menuW += this.MenuWidthPixelsChanged, this.menuOpen = true, console.log(this.menuOpen)) :
      (this.menuW -= this.MenuWidthPixelsChanged, this.menuOpen = false, console.log(this.menuOpen));
    this._menuW.next(this.menuW);

    this.menuOpen === true ?
      (this.mainW -= this.MenuWidthPixelsChanged) :
      (this.mainW += this.MenuWidthPixelsChanged);
    this._mainW.next(this.mainW);
  }
}
