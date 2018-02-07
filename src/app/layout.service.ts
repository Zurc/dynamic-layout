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
  detailsSidebar = {
    width: 200,
    open: false
  };
  //
  // ************************

  menuW: number;
  menuOpen = false;
  mainW: number;
  detailsS: any;
  // detailsOpen = false;

  // Observable sources
  private _menuW = new BehaviorSubject<number>(this.initialMenuWidth);
  private _mainW = new BehaviorSubject<number>(800);
  private _detailsS = new BehaviorSubject<any>(this.detailsSidebar);

  // Streams
  menuWidth$ = this._menuW.asObservable();
  mainWidth$ = this._mainW.asObservable();
  detailsSidebar$ = this._detailsS.asObservable();

  // Initial values for our streams
  constructor() {
    this.menuWidth$.subscribe( value => this.menuW = value );
    this.mainWidth$.subscribe( value => this.mainW = value );
    this.detailsSidebar$.subscribe( value => this.detailsS = value );
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
    this.detailsSidebar.open === false ?
      (this.mainW -= this.detailsS.width, this.detailsSidebar.open = true, this._detailsS.next(this.detailsSidebar)) :
      (this.mainW += this.detailsS.width, this.detailsSidebar.open = false, this._detailsS.next(this.detailsSidebar));
    this._mainW.next(this.mainW);
  }
}
