import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

// Views
import {HomeComponent} from './views/home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'm', component: MainComponent,
        children: [
          {path: 'home', component: HomeComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class MainRouter { }
