import { Component, OnInit } from '@angular/core';
import { Entry }             from 'src/app/models/Entry';
import { ApiService }        from 'src/app/services/api.service';

@Component( {
    selector    : 'app-all-entries',
    templateUrl : './all-entries.component.html',
    styleUrls   : [ './all-entries.component.scss' ]
} )
export class AllEntriesComponent implements OnInit {
    
    isBusy = false;
    
    entries : Entry[] = [];
    
    constructor( private api : ApiService ) { }
    
    ngOnInit() : void {
    }
    
    get hasEntries() : boolean {
        return this.entries.length > 0;
    }
    
    async load() {
        this.isBusy  = true;
        this.entries = await this.api.loadEntries();
        this.isBusy  = false;
    }
    
    async clear() {
        this.entries = [];
    }
    
}
