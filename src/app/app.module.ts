import { HttpClientModule }    from '@angular/common/http';
import { HttpClient }          from '@angular/common/http';
import { APP_INITIALIZER }     from '@angular/core';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }       from '@angular/platform-browser';
import { Router }              from '@angular/router';
import { ApiService }          from 'src/app/services/api.service';
import { AuthService }         from 'src/app/services/auth.service';
import { ConfigService }       from 'src/app/services/config.service';

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

function initConfig( configService : ConfigService ) : () => Promise<void> {
    
    return () => new Promise<void>( resolve => ( async () => {
        
        try {
            await configService.load();
            resolve();
        } catch ( e ) {
            // cant start app, when that fails, so we exit out:
            window.location.href = '/app-load-error.html';
        }
        
    } )() );
    
}

function initAuth( authService : AuthService ) : () => Promise<void> {
    
    return () => new Promise<void>( resolve => ( async () => {
        
        try {
            await authService.init();
        } catch ( e ) {
            await authService.logOut();
        }
        resolve();
        
    } )() );
    
}

@NgModule( {
    declarations : [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent,
        HomepageComponent,
        NewEntryComponent,
        AllEntriesComponent,
        LoginComponent,
        ErrorComponent
    ],
    imports      : [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers    : [
        ConfigService,
        {
            provide    : APP_INITIALIZER,
            useFactory : initConfig,
            multi      : true,
            deps       : [ ConfigService, Router ]
        },
        {
            provide    : ApiService,
            useFactory : ( configService : ConfigService ) => {
                const apiService = new ApiService( configService );
                return apiService;
            },
            deps       : [ ConfigService ],
            multi      : false
        },
        AuthService,
        {
            provide    : APP_INITIALIZER,
            useFactory : initAuth,
            multi      : true,
            deps       : [ AuthService ]
        },
    ],
    bootstrap    : [ AppComponent ]
} )
export class AppModule {}
