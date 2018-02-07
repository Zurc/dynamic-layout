import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
  mw: number;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.menuWidth$.subscribe(
      value => this.mw = value
    );
  }

}
