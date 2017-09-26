import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRouter } from './main.routes';

// Views
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MainRouter
  ],
  providers: [],
  entryComponents: [MainComponent]
})
export class MainModule { }
