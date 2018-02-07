import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {
  // ***** configuration *****
  //
  // Menu Sidebar width
  initialMenuWidth = 100;
  //
  // how many pixels the menu will expand
  MenuWidthPixelsChanged = 200;
  //
  // Details Sidebar width
  detailsWidth = 200;
  //
  // ************************

  menuW: number;
  menuOpen = false;
  mainW: number;
  detailsW: number;
  detailsOpen = false;

  // Observable sources
  private _menuW = new BehaviorSubject<number>(this.initialMenuWidth);
  private _mainW = new BehaviorSubject<number>(800);
  private _detailsW = new BehaviorSubject<number>(this.detailsWidth);

  // Streams
  menuWidth$ = this._menuW.asObservable();
  mainWidth$ = this._mainW.asObservable();
  detailsWidth$ = this._detailsW.asObservable();

  // Initial values for our streams
  constructor() {
    this.menuWidth$.subscribe( value => this.menuW = value );
    this.mainWidth$.subscribe( value => this.mainW = value );
    this.detailsWidth$.subscribe( value => this.detailsW = value );
  }

  // case: menu changes width
  toggleMenuWidth() {
    this.menuW === this.initialMenuWidth ?
      (this.menuW += this.MenuWidthPixelsChanged, this.menuOpen = true, console.log(`Menu open: ${this.menuOpen}`)) :
      (this.menuW -= this.MenuWidthPixelsChanged, this.menuOpen = false, console.log(`Menu open: ${this.menuOpen}`));
    this._menuW.next(this.menuW);

    this.menuOpen === true ?
      (this.mainW -= this.MenuWidthPixelsChanged) :
      (this.mainW += this.MenuWidthPixelsChanged);
    this._mainW.next(this.mainW);
  }

  // case: Details changes position
  toogleDetails() {
    this.detailsOpen === true ?
      (this.mainW -= this.detailsW, this.detailsOpen = false, console.log(`Details open: ${this.detailsOpen}`)) :
      (this.mainW += this.detailsW, this.detailsOpen = true, console.log(`Details open: ${this.detailsOpen}`));
    this._mainW.next(this.mainW);
  }
}
