import { Component } from '@angular/core';

@Component({
  selector: 'error-wrapper',
  template: '<xpo-http-error httpStatusCode="403"></xpo-http-error>',
  styleUrls: ['error.scss'],
})
export class ForbiddenViewComponent {}
