import { Injectable }  from '@angular/core';
import { computed }    from 'mobx';
import { action }      from 'mobx';
import { observable }  from 'mobx';
import { ApiService }  from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigStore } from 'src/app/stores/config.store';
import { pause }       from 'src/app/util/pause';

@Injectable( {
    providedIn : 'root'
} )
export class BootStore {
    
    @observable isBusy = true;
    
    constructor(
        private configStore : ConfigStore,
        private apiService : ApiService,
        private authService : AuthService,
    ) {}
    
    @action setToReady() {
        this.isBusy = false;
        console.log( 'this.isBusy', this.isBusy );
        
    }
    
    @computed get isReady() {
        return !this.isBusy;
    }
    
    @action
    public async initApp() {
        
        await this.configStore.loadFromJson();
        await this.authService.init();
        
        
        await pause( 500 );
    }
    
}





