import { Component } from '@angular/core';

@Component( {
    selector : 'app-login-layout',
    template : `
        <app-main-layout [showHeader]="false"></app-main-layout>
    `,
} )
export class LoginLayoutComponent {
}
