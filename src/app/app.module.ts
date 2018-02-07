import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { DetailsSidebarComponent } from './details-sidebar/details-sidebar.component';
import { MainComponent } from './main/main.component';
import { LayoutService } from './layout.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuSidebarComponent,
    DetailsSidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
