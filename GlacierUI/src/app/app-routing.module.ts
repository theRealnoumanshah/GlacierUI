import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
//import { HeroesComponent } from './heroes.component';
//import { HeroDetailComponent } from './hero-detail.component';

import { VaultsComponent } from './vaults.component';
import { VaultDetailComponent } from './vault-detail.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    //{ path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: VaultDetailComponent },
    { path: 'vaults', component: VaultsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}