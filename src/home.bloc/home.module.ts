import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../src/app/material.module';

import { HomeBlocComponent } from './home.component';
import { HTTPViewComponent } from './views/http-test/index';
import { IndexViewComponent } from './views/index/index';
import { VersionViewComponent } from './views/version/index';

import { SharedModule } from '../shared/shared.module';

// Import Services
import { ReleaseService } from './services/release.service';


import { routing } from './home.routing';

@NgModule({
  imports: [CommonModule, HttpModule, routing, SharedModule, MaterialModule],
  declarations: [HomeBlocComponent, HTTPViewComponent, IndexViewComponent, VersionViewComponent],
  providers: [ReleaseService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeBlocModule {}
