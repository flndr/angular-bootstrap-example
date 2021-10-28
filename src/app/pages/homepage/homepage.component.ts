import { Component }   from '@angular/core';
import { BootStore }   from 'src/app/stores/boot.store';
import { ConfigStore } from 'src/app/stores/config.store';

@Component( {
    selector    : 'app-homepage',
    templateUrl : './homepage.component.html',
    styleUrls   : [ './homepage.component.scss' ]
} )
export class HomepageComponent {
    
    constructor(
        public bootStore : BootStore,
        public configStore : ConfigStore
    ) {}
    
}
