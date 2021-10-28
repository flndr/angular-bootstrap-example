import { Component, OnInit } from '@angular/core';
import { TranslateService }  from '@ngx-translate/core';

@Component( {
    selector    : 'app-footer',
    templateUrl : './footer.component.html',
    styleUrls   : [ './footer.component.scss' ]
} )
export class FooterComponent implements OnInit {
    
    constructor( private translate : TranslateService ) { }
    
    ngOnInit() : void {
    }
    
    useLanguage( language : string ) : void {
        this.translate.use( language );
    }
    
    get currentLang() : string {
        return this.translate.currentLang || this.translate.defaultLang;
    }
    
}
