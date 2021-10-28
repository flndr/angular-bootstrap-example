import { Component, OnInit } from '@angular/core';
import { FormControl }       from '@angular/forms';
import { AuthService }       from 'src/app/services/auth.service';
import { UserStore }         from 'src/app/stores/user.store';

@Component( {
    selector    : 'app-login',
    templateUrl : './login.component.html',
    styleUrls   : [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {
    
    name = new FormControl( '' );
    pw   = new FormControl( '' );
    
    constructor(
        private authService : AuthService,
        private userStore : UserStore
    ) {
        
        console.log('LoginComponent constructed');
    }
    
    ngOnInit() : void {
    }
    
    async logIn( $event : Event ) {
        $event.preventDefault();
        if ( !this.authService.isBusy ) {
            const token = await this.authService.logIn( this.name.value, this.pw.value );
            //await this.router.navigate( [ this.redirectAfterLogin ] );
            
        }
    }
    
    get isLoginButtonDisabled() {
        return this.authService.isBusy;
    }
    
    get loginButtonText() {
        return this.authService.isBusy ? '...' : 'Login';
    }
}
