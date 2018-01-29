import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/ex/index',
            },
            { path: 'ex', loadChildren: 'example.bloc/ex.module#ExampleBlocModule' },
            { path: 'error', loadChildren: 'error/error.module#ErrorModule'},
            // {path: '**', redirectTo: '/pagenotfound'}
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
