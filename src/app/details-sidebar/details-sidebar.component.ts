import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-details-sidebar',
  templateUrl: './details-sidebar.component.html',
  styleUrls: ['./details-sidebar.component.css']
})
export class DetailsSidebarComponent implements OnInit {
  mw: number;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.menuWidth$.subscribe(
      value => this.mw = value
    );
  }

}