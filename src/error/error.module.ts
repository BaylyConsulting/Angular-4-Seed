import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { XpoHttpErrorModule } from '@xpo/common';

import { ForbiddenViewComponent } from './403.component';
import { NotFoundViewComponent } from './404.component';
import { ServerErrorViewComponent } from './500.component';
import { ErrorRoutes } from './error.routes';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutes,
    XpoHttpErrorModule,
  ],
  declarations: [
    ForbiddenViewComponent,
    NotFoundViewComponent,
    ServerErrorViewComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ErrorModule { }
