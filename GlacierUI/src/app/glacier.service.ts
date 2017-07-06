﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GlacierVault } from './glacierVault';
////import { HEROES } from './mock-heroes';
import { GLACIERVAULT } from './mock-glacierVault';

@Injectable()
export class GlacierService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    //getHeroes(): Promise<Hero[]> {

    //    return Promise.resolve(HEROES);

    //}

    private glacierUrl = 'http://localhost:1447/Glacier/Get';  // URL to web api

    constructor(private http: Http) { }

    //getHeroesSlowly(): Promise<Hero[]> {
    //    return new Promise(resolve => {
    //        // Simulate server latency with 2 second delay
    //        setTimeout(() => resolve(this.getHeroes()), 2000);
    //    });
    //}

    getVaults(): Promise<GlacierVault> {
        return this.http.get(this.glacierUrl)
            .toPromise()
            .then(response => response.json() as GlacierVault)            //.then(this.extractData)
            .catch(this.handleError);
    }

    //private extractData(res: Response) {
    //    console.log(res.json());
    //    let body = res.json();
    //    console.log(body);
    //    return body.data || {};
    //}

    //getDetails(): Promise<GlacierDetail[]> {

    //    return Promise.resolve(GLACIERDETAILS);

    //} 
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    //getHeroesSlowly() {
    //    return new Promise<Hero[]>(resolve =>
    //        setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    //    );
    //};

    //getHero(id: number): Promise<Hero> {
    //    return this.getHeroes()
    //        .then(heroes => heroes.find(hero => hero.id === id));
    //}

    //getHero(id: number): Promise<Hero> {
    //    const url = `${this.heroesUrl}/${id}`;
    //    return this.http.get(url)
    //        .toPromise()
    //        .then(response => response.json().data as Hero)
    //        .catch(this.handleError);

    //}

    //delete(id: number): Promise<void> {
    //    const url = `${this.heroesUrl}/${id}`;
    //    return this.http.delete(url, { headers: this.headers })
    //        .toPromise()
    //        .then(() => null)
    //        .catch(this.handleError);
    //}
}