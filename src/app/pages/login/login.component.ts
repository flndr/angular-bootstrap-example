import { Component, OnInit } from '@angular/core';
import { FormControl }       from '@angular/forms';
import { AuthService }       from 'src/app/services/auth.service';

@Component( {
    selector    : 'app-login',
    templateUrl : './login.component.html',
    styleUrls   : [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {
    
    name = new FormControl( '' );
    pw   = new FormControl( '' );
    
    constructor( private authService : AuthService ) { }
    
    ngOnInit() : void {
    }
    
    logIn( $event : Event ) {
        $event.preventDefault();
        if ( !this.authService.isBusy ) {
            this.authService.logIn( this.name.value, this.pw.value )
            
        }
    }
    
    get isLoginButtonDisabled() {
        return this.authService.isBusy;
    }
    
    get loginButtonText() {
        return this.authService.isBusy ? '...' : 'Login';
    }
}
