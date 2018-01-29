import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenViewComponent } from './403.component';
import { NotFoundViewComponent } from './404.component';
import { ServerErrorViewComponent } from './500.component';

const routes: Routes = [
  { path: '403', component: ForbiddenViewComponent },
  { path: '404', component: NotFoundViewComponent },
  { path: '500', component: ServerErrorViewComponent },
];

export const ErrorRoutes: ModuleWithProviders = RouterModule.forChild(routes);
