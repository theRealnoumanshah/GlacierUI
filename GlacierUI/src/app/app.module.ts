import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { GlacierService } from './glacier.service';
import { HeroSearchComponent } from './hero-search.component';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        InputTextModule,
        ButtonModule,
        DataGridModule,
        PanelModule,
        DialogModule,
        TabViewModule,
        CodeHighlighterModule,
        BrowserAnimationsModule,
        DataTableModule,
        SharedModule
        
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
    ],
    providers: [HeroService, GlacierService],
    bootstrap: [AppComponent]
})
export class AppModule { }
