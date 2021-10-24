import { Component, OnInit } from '@angular/core';
import { AuthService }       from 'src/app/services/auth.service';

@Component( {
    selector    : 'app-homepage',
    templateUrl : './homepage.component.html',
    styleUrls   : [ './homepage.component.scss' ]
} )
export class HomepageComponent implements OnInit {
    
    constructor( private authService : AuthService ) { }
    
    ngOnInit() : void {
    }
    
    logIn() {
        this.authService.logIn();
    }
    
}
