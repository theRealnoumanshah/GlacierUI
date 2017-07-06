﻿import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {

    title: 'Tour of Heroes';

    name: string;

    message: string;

    onClick() {
        this.message = 'Hello ' + this.name;
    }
}