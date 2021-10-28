import { HttpClient }           from '@angular/common/http';
import { HttpClientModule }     from '@angular/common/http';
import { Provider }             from '@angular/core';
import { TranslateLoader }      from '@ngx-translate/core';
import { TranslateModule }      from '@ngx-translate/core';
import { TranslateHttpLoader }  from '@ngx-translate/http-loader';
import { MobxAngularModule }    from 'mobx-angular';
import { APP_INITIALIZER }      from '@angular/core';
import { NgModule }             from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { BrowserModule }        from '@angular/platform-browser';
import { LoginLayoutComponent } from 'src/app/layouts/login-layout/login-layout.component';
import { ApiService }           from 'src/app/services/api.service';
import { AuthService }          from 'src/app/services/auth.service';
import { BootStore }            from 'src/app/stores/boot.store';
import { ConfigStore }          from 'src/app/stores/config.store';
import { UserStore }            from 'src/app/stores/user.store';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { HeaderComponent }     from './components/header/header.component';
import { FooterComponent }     from './components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomepageComponent }   from './pages/homepage/homepage.component';
import { NewEntryComponent }   from './pages/new-entry/new-entry.component';
import { AllEntriesComponent } from './pages/all-entries/all-entries.component';
import { LoginComponent }      from './pages/login/login.component';
import { ErrorComponent }      from './pages/error/error.component';
import { AwaitBootDirective }  from './directives/await-boot.directive';

const waitFor = ( callback : ( done : () => void ) => void ) => {
    return () => new Promise<void>( resolve => ( async () => {
        await callback( resolve );
    } )() );
}

const hydrateConfig = ( configStore : ConfigStore ) => waitFor( async done => {
    try {
        await configStore.loadFromJson();
        done();
    } catch ( e ) {
        // cant start app, when that fails, so we exit out:
        window.location.href = '/app-load-error.html';
    }
} );

const loadUserSession = ( authService : AuthService ) => waitFor( async done => {
    try {
        await authService.init();
    } catch ( e ) {
        await authService.logOut();
    }
    done();
} );

const appBootOrder : Provider[] = [
    {
        multi      : true,
        provide    : APP_INITIALIZER,
        useFactory : hydrateConfig,
        deps       : [ ConfigStore ]
    },
    {
        provide    : ApiService,
        useFactory : loadUserSession,
        deps       : [ ApiService ]
    },
];

export function HttpLoaderFactory( http : HttpClient ) {
    return new TranslateHttpLoader( http );
}

@NgModule( {
    declarations : [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent,
        LoginLayoutComponent,
        HomepageComponent,
        NewEntryComponent,
        AllEntriesComponent,
        LoginComponent,
        ErrorComponent,
        AwaitBootDirective
    ],
    imports      : [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MobxAngularModule,
        TranslateModule.forRoot( {
            defaultLanguage: 'de',
            loader : {
                provide    : TranslateLoader,
                useFactory : HttpLoaderFactory,
                deps       : [ HttpClient ]
            }
        } )
    ],
    providers    : [
        ...appBootOrder,
        ApiService,
        AuthService,
        ConfigStore,
        UserStore,
    ],
    bootstrap    : [ AppComponent ]
} )
export class AppModule {}
