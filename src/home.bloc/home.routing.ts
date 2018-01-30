import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HTTPViewComponent } from './views/http-test/http.component';
import { IndexViewComponent } from './views/index/index.component';
import { VersionViewComponent } from './views/version/version.component';

const routes: Routes = [
  { path: 'index', component: IndexViewComponent },
  { path: 'version', component: VersionViewComponent },
  { path: 'httptest', component: HTTPViewComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
