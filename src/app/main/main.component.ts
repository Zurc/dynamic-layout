import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  // menu width
  mw: number;
  mainW = 0;

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.menuWidth$.subscribe(
      value => this.mw = value
    );
    this.changeMain();
  }

  changeMain() {
    this.mainW = 100 - this.mw;
  }

}
