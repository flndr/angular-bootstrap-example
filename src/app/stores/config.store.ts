import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { runInAction } from 'mobx';
import { action }      from 'mobx';
import { computed }    from 'mobx';
import { observable }  from 'mobx';

interface ConfigModel {
    backendUrl : string;
}

const defaultConfig : ConfigModel = {
    backendUrl : '/'
}

@Injectable( {
    providedIn : 'root'
} )
export class ConfigStore {
    
    @observable
    private _config : ConfigModel = defaultConfig;
    
    constructor( private http : HttpClient ) {
        console.log( 'ConfigStore constructed' );
    }
    
    @computed
    get config() : ConfigModel {
        return this._config;
    }
    
    @action
    async loadFromJson() {
        try {
            const config = await this.http.get<ConfigModel>( 'config.json' ).toPromise();
            runInAction( () => {
                this._config = config;
                console.log( 'Config loaded', this._config );
            } );
        } catch ( e ) {
            throw e;
        }
    }
}
