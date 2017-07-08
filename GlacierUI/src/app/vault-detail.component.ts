import { Component, Input, OnInit } from '@angular/core';
import { Vault } from './vault';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { GlacierService } from './glacier.service';

@Component ({

    selector: 'vault-detail',
    templateUrl: './vault-detail.component.html',
    providers: [GlacierService]

})

export class VaultDetailComponent implements OnInit  {
    vault: Vault;

    constructor(
        private glacierService: GlacierService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.glacierService.getVault(params['vaultARN']))
            .subscribe(vault => this.vault = vault);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.glacierService.update(this.vault)
            .then(() => this.goBack());
    }
}


