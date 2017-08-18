import {Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, ComponentFactoryResolver, ChangeDetectionStrategy} from '@angular/core';
import { NgFor, NgIf }         from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import {AppServices} from './search.service';
import {AppSettings} from './app.settings'

@Component({
    selector: 'resal',
    template: ` 
        <ul class="nav navbar-nav navbar-right" [hidden]="ocultar()">
            <li>
                <a (click)="cargar()">Resaltar valores</a>
            </li>
        </ul>`,
    providers: [AppServices],
})

export class ResaltarComponent implements OnInit {
    errorMessage: any;
    camp: string[] = [];
    iden: string[];
    indica: any[];
    jsdata: any[];
    resBool: boolean = false;
    @Input() campos: Array<string[]> = [];
    @Input() tipes: string[] = [];
    @Output() resalf = new EventEmitter();
    mostrar: boolean;

    constructor(public service: AppServices) {
    }

    ngOnInit() {
        this.service.getJSON(AppSettings.DATA3 + "db").subscribe(res =>
            this.indica = Object.keys(res),
            error => this.errorMessage = error,
            () => {
                this.service.getJSON(AppSettings.DATA3 + this.indica[0]).subscribe(r =>
                    this.jsdata = r,
                    error => this.errorMessage = error,
                    () => {
                        this.camposFuncion();
                    });
            }
        );
    }

    camposFuncion() {
        let aux: string[] = [];

        this.iden = Object.keys(this.jsdata[0]);
        this.iden.forEach(id => {
            if (typeof this.jsdata[0][id] != "object")
                aux['id'] = id;
            else
                aux['campos'] = id;
        })
        if (aux['campos'] && aux['id']) {
            this.jsdata.forEach(obje => {
                let cam: string[] = [];
                if (obje) {
                    //forEach devuelve en cada itearacion el valor y este se guarda en 'cam',
                    //con una clave string igual al valor.
                    obje[aux['campos']].forEach((key: string) => {
                        cam[key] = key;
                        if (!this.camp[key])
                            this.camp[key] = key;
                    });
                }
                this.campos[obje[aux['id']]] = cam;
            });
        }
    }

    cargar() {
        if (!this.resBool) {
            this.resBool = !this.resBool;
            this.resalf.emit(this.campos);
        }
        else {
            this.resBool = !this.resBool;
            this.resalf.emit(null);
        }
    }

//Si el json hace referencia a un unico conjunto de datos, en caso contario no tendria sentido ocultar el enlace a esta funcion
    ocultar() {
        this.mostrar = null;
        Object.keys(this.camp).forEach(iden => {
            if (!this.tipes[this.camp[iden]])
                this.mostrar = false;
        });
        if (this.mostrar == false)
            return true;
        else
            return false;
    }

}