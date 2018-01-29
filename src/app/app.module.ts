import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GatewayInterceptor } from '../core/interceptors/error.interceptor'

// Imports the Main Application Component (This manages the layout for the application)
import { AppComponent } from './app.component';

// Imports the Routing Module, this manages the initial route setting
import { AppRoutingModule } from './app.routes';

import {
  XpoFooterModule,
  XpoHeaderModule,
  XpoIconModule,
  XpoImgModule,
  XpoInternalAppModule,
  XpoMainModule,
  XpoMenuBarModule,
} from '@xpo/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    XpoFooterModule,
    XpoHeaderModule,
    XpoIconModule,
    XpoImgModule,
    XpoInternalAppModule,
    XpoMainModule,
    XpoMenuBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GatewayInterceptor,
      multi: true
    }
  ],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
