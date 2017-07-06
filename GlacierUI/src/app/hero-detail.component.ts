import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component ({

    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    providers: [HeroService]

})

export class HeroDetailComponent implements OnInit  {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}


