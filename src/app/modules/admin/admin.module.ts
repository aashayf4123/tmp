import {NgModule} from '@angular/core';

import {AdminComponent} from './pages/admin.component';
import {AdminRoutingModule} from './admin.routing.module';
import {AdminTableModule} from '../../core/components/admin-table/admin-table.module';

@NgModule({
    imports: [
        AdminRoutingModule,
        AdminTableModule
    ],
    declarations: [
        AdminComponent
    ]
})
export class AdminModule {
}
