import { Component }   from '@angular/core';
import { User }        from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { BootStore }   from 'src/app/stores/boot.store';

@Component( {
    selector    : 'app-header',
    templateUrl : './header.component.html',
    styleUrls   : [ './header.component.scss' ]
} )
export class HeaderComponent {
    
    constructor(
        private authService : AuthService,
        public bootStore : BootStore
    ) { }
    
  
    get isBusy() {
        return this.authService.isBusy;
    }
    
    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
    
    get user() : User | null {
        return this.authService.user;
    }
    
    logOut() {
        return this.authService.logOut();
    }
    
}
