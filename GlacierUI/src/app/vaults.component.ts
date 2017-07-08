import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

//import { Hero } from './hero';
import { GlacierVault } from './glacierVault';
import { Vault } from './vault';
//import { HeroService } from './hero.service';
import { GlacierService } from './glacier.service';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'my-vaults',
    templateUrl: './vaults.component.html',
    styleUrls: [ './vaults.component.css' ],
    providers: [GlacierService]
})

export class VaultsComponent implements OnInit {

    msgs: Message[];
    title = 'Vault Details';
    vaults: Vault[];
    selectedVault: Vault;
    glacierVault: GlacierVault;    
    displayDialog: boolean;
    //selectedHero: Hero;

    constructor(
        //private router: Router,
        //private heroService: HeroService,
        private glacierService: GlacierService) { }

    //gotoDetail(): void {
    //    this.router.navigate(['/detail', this.selectedHero.id]);
    //}

    //gotoDetail(): void {
    //    this.router.navigate(['/detail', this.selectedVault.vaultName]);
    //}

    ngOnInit(): void {
        //this.getHeroes();
        this.getGlacierVaults();
    }

    //getHeroes(): void {

    //    this.heroService.getHeroes().then(heroes => this.heroes = heroes);        
    //}

    getGlacierVaults(): void {
        
        this.glacierService.getVaults().then(vaultWrapper => this.vaults = vaultWrapper.vaultList);
    }

    onRowSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Vault Selected', detail: event.data.vaultName + ' - ' + event.data.numberOfArchives });
    }

    onRowUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Vault Unselected', detail: event.data.vaultName + ' - ' + event.data.numberOfArchives });
    }

    //onSelect(hero: Hero): void {
    //    this.selectedHero = hero;
    //    this.displayDialog = true;
    //}

    //onSelect(vault: Vault): void {
    //    this.selectedVault = vault;
    //    this.displayDialog = true;
    //}

    //add(name: string): void{
    //    name = name.trim();
    //    if (!name) { return; }
    //    this.glacierService.create(name)
    //        .then(vault => {
    //    this.vaults.push(vault)
    //    this.selectedVault = null;
    //        })

    //}

    //delete(vault: Vault): void {
    //    this.glacierService
    //        .delete(vault.vaultARN)
    //        .then(() => {
    //            this.vaults = this.vaults.filter(v => v !== vault);
    //            if (this.selectedVault === vault) { this.selectedVault = null; }
    //        });
    //}

}
