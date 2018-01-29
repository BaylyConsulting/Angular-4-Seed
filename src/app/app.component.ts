import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../core/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cfgSettings: any;
  public title: string = 'BC Angular 5 Seed';
  public version: string = 'v2.1.0';
  public headerMenu: any = [];
  public footerMenu: any = [];

  constructor(private configService: ConfigService) { }

  public ngOnInit() {
    this.configService.getConfigSettings().subscribe((cfgSettings) => {
      this.cfgSettings = cfgSettings;
      this.title = cfgSettings.title;
      this.headerMenu = cfgSettings.menus.header;
      this.footerMenu = cfgSettings.menus.footer;
    },
    );

  }

}
