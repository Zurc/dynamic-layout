import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-details-sidebar',
  templateUrl: './details-sidebar.component.html',
  styleUrls: ['./details-sidebar.component.css']
})
export class DetailsSidebarComponent implements OnInit {
  dw: number;
  detailsOpened: boolean;
  marginR: number;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.detailsSidebar$.subscribe(
      value => {
        this.dw = value.width;
        this.detailsOpened = value.open;
      }
    );
  }

  toggleDetails() {
    this.detailsOpened === true ? (this.marginR = 0) : (this.marginR = this.dw);
    this.layout.toogleDetails();
    console.log(this.detailsOpened);
  }

}
