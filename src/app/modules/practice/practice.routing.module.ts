import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PracticeComponent} from './pages/practice.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PracticeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class PracticeRoutingModule {
}
