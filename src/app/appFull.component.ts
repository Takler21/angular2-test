import {Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver, ChangeDetectionStrategy} from '@angular/core';
import { NgFor, NgIf }         from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import {AppServices} from './search.service';
import { AppSettings } from './app.settings';

//Es el componente que engloba a las tablas, para que puedan sin cambiar de pagina poner las 2 tablas o en caso de que esten puestas quitarlas.
@Component({
    selector: 'my-appF',
    template: `
    <template [ngIf]="bbdd?.length == 1 ||(bbdd?.length > 1 && !dobleVal)">
        <div class="container" id="main">   
            <div class="center-block">
            <div id="header"></div>
                <my-app *ngIf="dobleVal==null" [bbdd]="bbdd" [dobleVal]="dobleVal">Loading...</my-app>
                <my-app *ngIf="dobleVal!=null" [bbdd]="bbdd" [dobleVal]="dobleVal" (doble)="dobleVal = $event">Loading...</my-app>
            </div>
        </div>
    </template>
    <template [ngIf]="bbdd?.length > 1 && dobleVal">
        <div class="container" id="main" style="width:97%;">   
            <div class="center-block">
                <div class="comp1">
                    <my-app [bbdd]="bbdd" [dobleVal]="dobleVal" (doble)="dobleVal = $event">Loading...</my-app>
                </div>
                <div class="comp2">
                    <my-app [api]="bbdd[1]" [bbdd]="bbdd" [dobleVal]="dobleVal" (doble)="dobleVal = $event">Loading...</my-app>
                </div>
            </div>
        </div>
    </template>
  

` ,
    providers: [AppServices],
})

export class App2Component implements OnInit {
    errorMessage: any;
    @Input() bbdd: string[];
    @Input() dobleVal: boolean;

    ngOnInit() {
        this.appservice.getJSON(AppSettings.DATA2 + "db").subscribe(res =>
            this.bbdd = Object.keys(res),
            error => this.errorMessage = error,
            () => {
                if (this.bbdd.length > 1)
                    this.dobleVal = false;
                else
                    this.dobleVal = null;
            }
            );
    }

    constructor(public appservice: AppServices) {
    }
}