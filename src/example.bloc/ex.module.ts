import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ExampleBlocComponent } from './ex.component';
import { HTTPViewComponent } from './views/http-test/index';
import { IndexViewComponent } from './views/index/index';
import { VersionViewComponent } from './views/version/index';

import { SharedModule } from '../shared/shared.module';

// Import Services
import { ReleaseService } from './services/release.service';


import { routing } from './ex.routing';

@NgModule({
  imports: [CommonModule, HttpModule, routing, SharedModule, BrowserAnimationsModule],
  declarations: [ExampleBlocComponent, HTTPViewComponent, IndexViewComponent, VersionViewComponent],
  providers: [ReleaseService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExampleBlocModule {}
