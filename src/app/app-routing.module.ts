import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent }  from 'src/app/layouts/main-layout/main-layout.component';
import { AllEntriesComponent }  from 'src/app/pages/all-entries/all-entries.component';
import { HomepageComponent }    from 'src/app/pages/homepage/homepage.component';
import { NewEntryComponent }    from 'src/app/pages/new-entry/new-entry.component';

const routes: Routes = [
    {
        path : '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component : HomepageComponent
            },
            {
                path: 'new-entry',
                component : NewEntryComponent
            },
            {
                path: 'all-entries',
                component : AllEntriesComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
