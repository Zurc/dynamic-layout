import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private layout: LayoutService) { }

  toggleMenu() {
    this.layout.toggleMenuWidth();
  }
}
