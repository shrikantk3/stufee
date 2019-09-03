import { Component, OnInit } from '@angular/core';

@Component({
    selector:'inner-wrapper',
    template:'<div class="inner-warapper"><router-outlet></router-outlet></div>'
})

export class StufeeAppComponent implements OnInit{
    constructor(){}
    ngOnInit(){

    }
}