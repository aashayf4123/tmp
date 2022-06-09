import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CalendlyComponent } from './components/calendly/calendly.component';

/**
 * The core module is used to hold all root-level providers.
 * It should only be imported in the AppModule (Application Root Module).
 *
 * @since 1.0.0
 */
@NgModule({
  // Place all forRoot() imports here
  imports: [

  LayoutModule,

  MatToolbarModule,

  MatButtonModule,

  MatSidenavModule,

  MatIconModule,

  MatListModule],
  // Place all services/providers/injection tokens here
  providers: [
    // Provide your app wide services here
  ],
  declarations: [CalendlyComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the root module only');
    }
  }
}
