import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuW;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.menuWidth$.subscribe(
      value => this.menuW = value
    );
  }

  toggleMenu() {
    this.menuW = this.menuW === 10 ? 20 : 10;
    this.layout.editMenuWidth(this.menuW);
  }
}
