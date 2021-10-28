import { Component, OnInit } from '@angular/core';
import { FormGroup }         from '@angular/forms';
import { Validators }        from '@angular/forms';
import { FormBuilder }       from '@angular/forms';
import { FormControl }       from '@angular/forms';
import { AuthService }       from 'src/app/services/auth.service';
import { UserStore }         from 'src/app/stores/user.store';

@Component( {
    selector    : 'app-login',
    templateUrl : './login.component.html',
    styleUrls   : [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {
    
    form;
    
    constructor(
        private authService : AuthService,
        private userStore : UserStore,
        private fb : FormBuilder
    ) {
    
        this.form = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
        
        console.log( 'LoginComponent constructed' );
    }
    
    ngOnInit() : void {
    }
    
    async logIn( $event : Event ) {
        $event.preventDefault();
        if ( !this.authService.isBusy ) {
            //const token = await this.authService.logIn( this.name.value, this.pw.value );
            
        }
    }
    
    get isLoginButtonDisabled() {
        return this.authService.isBusy;
    }
    
    get isBusy() {
        return this.authService.isBusy;
    }
}
