import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhylosophyComponent} from './pages/phylosophy.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PhylosophyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class PhylosophyRoutingModule {
}
