import {NgModule} from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';

import {SliderModule} from '../../core/components/slider/slider.module';
import {TestmonialsModule} from '../../core/components/testmonials/testmonials.module';
import {ReserveContactModule} from '../../core/components/reserve-contact/reserve-contact.module';
import {HomeComponent} from './pages/home.component';
import {HomeRoutingModule} from './home.routing.module';

/**
 * This is Home application module
 *
 * @since 1.0.0
 */
@NgModule({
    imports: [
        HomeRoutingModule,
        SliderModule,
        TestmonialsModule,
        ReserveContactModule,
        TranslateModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {
}
