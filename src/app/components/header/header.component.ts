import { Component, OnInit } from '@angular/core';
import { AuthService }       from 'src/app/services/auth.service';

@Component( {
    selector    : 'app-header',
    templateUrl : './header.component.html',
    styleUrls   : [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit {
    
    constructor( private authService : AuthService ) { }
    
    ngOnInit() : void {
    }
    
    get authStatus() : string {
        if ( this.authService.isBusy ) {
            return '...';
        }
        return this.authService.isLoggedIn ? 'Logged In' : 'Logged Out';
    }
}
