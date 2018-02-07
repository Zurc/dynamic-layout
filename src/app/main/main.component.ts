import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  mainW: number;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.mainWidth$.subscribe(
      value => this.mainW = value
    );
  }
}
