import { Input }            from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { TemplateRef }      from '@angular/core';
import { ElementRef }       from '@angular/core';
import { Directive }        from '@angular/core';

@Directive( {
    selector : '[appAwaitBoot]',
} )
export class AwaitBootDirective {
    
    constructor(
        private element : ElementRef,
        private templateRef : TemplateRef<any>,
        private viewContainer : ViewContainerRef
    ) {
    }
    
    //
    //@Input()
    //set myIf( val ) {
    //    if ( val ) {
    //        this.viewContainer.createEmbeddedView( this.templateRef );
    //    } else {
    //        this.viewContainer.clear();
    //    }
    //}
    //
}
