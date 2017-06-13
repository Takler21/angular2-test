import {Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges, ComponentFactoryResolver, ChangeDetectionStrategy} from '@angular/core';
import { NgFor, NgIf }         from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {UtilsServices} from './utils.service';
import {AppServices} from './search.service';

@Component({
    selector: 'form-req',
    templateUrl: 'app/formR.component.html',
    providers: [UtilsServices],
})
export class FormReq implements OnChanges, OnInit {
    @Input() key: string; //creo que aqui es input porque  el valor vendra del otro componente
    @Input() tipes: string[];
    @Input() obj: any;
    @Input() campos: any;
    @Input() testid: any;
    @Input() validR: boolean;
    @Output() inputCreate = new EventEmitter();
    ocult: boolean = true;
    errorMessage: any;
    llave: string[] = [];
    public statesComplex: any[];
    public nombre: string[];


    constructor(public utils: UtilsServices, public appservice: AppServices) {
    }

    ngOnInit() {

        this.appservice.getJSON('http://localhost:5000/db/').subscribe(res =>
            this.llave = Object.keys(res),
            error => this.errorMessage = error,
            () => {
                this.appservice.getJSON('http://localhost:5000/' + this.llave[0] + '/').subscribe(res =>
                    this.statesComplex = res);
            }
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        this.inputCreate.emit(this.obj);
    }

    onCheck(v: boolean, key: string) {
            this.obj[key] = v;
    }

    ocultar() {
        this.ocult = !this.ocult;
    }

    comprobar() {
        let st: string;
        if (this.obj[this.key]) {
            this.statesComplex.forEach(state => {
                if (this.obj[this.key].toLowerCase().trim() == state.name.toLowerCase().trim())
                    st = state.name;
            });
            this.obj[this.key] = st;
        }

    }

}