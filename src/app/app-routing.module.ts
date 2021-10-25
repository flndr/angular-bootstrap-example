import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent }  from 'src/app/layouts/main-layout/main-layout.component';
import { AllEntriesComponent }  from 'src/app/pages/all-entries/all-entries.component';
import { ErrorComponent }       from 'src/app/pages/error/error.component';
import { HomepageComponent }    from 'src/app/pages/homepage/homepage.component';
import { LoginComponent }       from 'src/app/pages/login/login.component';
import { NewEntryComponent }    from 'src/app/pages/new-entry/new-entry.component';
import { AuthGuardService }     from 'src/app/services/auth-guard.service';

const routes : Routes = [
    {
        path        : '',
        component   : MainLayoutComponent,
        canActivate : [ AuthGuardService ],
        children    : [
            {
                path      : '',
                component : HomepageComponent
            },
            {
                path      : 'new-entry',
                component : NewEntryComponent
            },
            {
                path      : 'all-entries',
                component : AllEntriesComponent
            }
        ]
    },
    {
        path      : 'login',
        component : LoginComponent
    },
    {
        path      : 'error',
        component : ErrorComponent
    }
];

@NgModule( {
    imports : [ RouterModule.forRoot( routes ) ],
    exports : [ RouterModule ]
} )
export class AppRoutingModule {}
