import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { GlacierVault } from './glacierVault';
import { HeroService } from './hero.service';
import { GlacierService } from './glacier.service';


@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ],
    providers: [HeroService, GlacierService]
})
export class HeroesComponent implements OnInit {

    title = 'Tour of Heroes';    
    heroes: Hero[];
    glacierVault: GlacierVault;
    selectedHero: Hero;
    displayDialog: boolean;

    constructor(
        private router: Router,
        private heroService: HeroService,
        private glacierService: GlacierService) { }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    ngOnInit(): void {
        this.getHeroes();
        this.getGlacierDetails();
    }

    getHeroes(): void {

        this.heroService.getHeroes().then(heroes => this.heroes = heroes);        
    }

    getGlacierDetails(): void {
        
        this.glacierService.getVaults().then(vaults => this.glacierVault = vaults);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.displayDialog = true;
    }

    add(name: string): void{
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
        this.heroes.push(hero)
        this.selectedHero = null;
            })

    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

}
