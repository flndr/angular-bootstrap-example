import { Injectable }             from '@angular/core';
import { Router }                 from '@angular/router';
import { RouterStateSnapshot }    from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate }            from '@angular/router';
import { AuthService }            from 'src/app/services/auth.service';

@Injectable( {
    providedIn : 'root'
} )
export class AuthGuardService implements CanActivate {
    
    constructor(
        private authService : AuthService,
        private router : Router
    ) { }
    
    public canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) : boolean {
        
        if ( !this.authService.isLoggedIn ) {
            this.authService.redirectAfterLogin = state.url;
            this.router.navigate( [ 'login' ] );
            return false;
        }
        
        return true;
    }
    
}
