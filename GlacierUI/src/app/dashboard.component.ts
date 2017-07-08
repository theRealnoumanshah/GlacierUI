import { Component, OnInit } from '@angular/core';
import { Vault } from './vault';
import { GlacierService } from './glacier.service';

@Component({

    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',    
    styleUrls: [ './dashboard.component.css' ],
    providers: [GlacierService]
})

export class DashboardComponent implements OnInit {

    vaults: Vault[];

    constructor(private glacierService: GlacierService) { }

    ngOnInit(): void {

        this.glacierService.getVaults()
            .then(vaultWrapper => this.vaults = vaultWrapper.vaultList.slice(1,5));
    }
}