import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-details-sidebar',
  templateUrl: './details-sidebar.component.html',
  styleUrls: ['./details-sidebar.component.css']
})
export class DetailsSidebarComponent implements OnInit {
  dw: number;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.detailsWidth$.subscribe(
      value => this.dw = value
    );
  }

  toggleDetails() {
    this.layout.toogleDetails();
  }

}
