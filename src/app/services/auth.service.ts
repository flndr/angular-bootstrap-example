import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { ImmortalDB } from 'immortal-db';
import { User }       from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Injectable( {
    providedIn : 'root',
} )
export class AuthService {
    
    static KEY_USERNAME = 'app-username';
    
    redirectAfterLogin = '/';
    
    _user : User | null = null;
    _isBusy : boolean   = false;
    
    constructor(
        private apiService : ApiService,
        private router : Router
    ) {
        console.log( 'AuthService constructed' );
    }
    
    get user() : User | null {
        return this._user;
    }
    
    get isBusy() : boolean {
        return this._isBusy;
    }
    
    get isLoggedIn() : boolean {
        return !!this.user;
    }
    
    async init() {
        const name = await ImmortalDB.get( AuthService.KEY_USERNAME, null );
        if ( name ) {
            await this.loadUser( name );
        }
        
    }
    
    async logIn( name : string, pw : string ) : Promise<void> {
        
        this._isBusy = true;
        
        await this.loadUser( name );
        
        await ImmortalDB.set( AuthService.KEY_USERNAME, name );
        
        this._isBusy = false;
        
        await this.router.navigate( [ this.redirectAfterLogin ] );
    }
    
    async logOut() : Promise<void> {
        await ImmortalDB.remove( AuthService.KEY_USERNAME );
        this._user = null;
        this.apiService.setToken( null );
        this.router.navigate( [ 'login' ] );
    }
    
    private async loadUser( name : string ) {
        this._user = await this.apiService.loadUserDetail( name );
        this.apiService.setToken( this._user.firstname + this._user.lastname + '_123abc' );
        console.log( 'User loaded', this._user );
    }
    
}
