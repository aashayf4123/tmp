import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {NavbarModule} from './core/components/navbar/navbar.module';
import {FooterModule} from './core/components/footer/footer.module';
import {MaterialModule} from './material.module';
import {AuthenticationService} from './core/services/authentication.service';
import {UserService} from './core/services/user.service';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        BrowserAnimationsModule,
        FooterModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        AuthenticationService,
        UserService,
        TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
