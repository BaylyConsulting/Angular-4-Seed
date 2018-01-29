import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'Bayly Consulting Angular 5 Seed';
  public version: string = 'v2.1.0';
  public headerMenu: any = [];
  public footerMenu: any = [];

  constructor() { }

  public ngOnInit() {}

}
