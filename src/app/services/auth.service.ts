import { Injectable } from '@angular/core';
import { pause }      from 'src/app/util/pause';

@Injectable( {
    providedIn : 'root'
} )
export class AuthService {
    
    isLoggedIn : boolean = false;
    isBusy : boolean     = false;
    
    constructor() { }
    
    async logIn() : Promise<void> {
        this.isBusy = true;
        
        await pause( 2000 );
        
        this.isLoggedIn = true;
        this.isBusy     = false;
    }
    
}
