import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ComponentFactoryResolver, ChangeDetectionStrategy} from '@angular/core';
import { NgFor, NgIf }         from '@angular/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import {AppServices} from './search.service';
import {AppSettings} from './app.settings';
import {UtilsServices} from './utils.service';

@Component({
    selector: 'buscador-tabla',
    templateUrl: "app/buscadorTabla.component.html"
    ,
    providers: [AppServices, UtilsServices],
})

export class BuscadorTablaComponent implements OnInit, OnChanges {
    @Input() datos: any[];
    @Input() test: any;
    @Input() api: string;
    @Input() campos: any[];
    @Input() tipes: string[];
    @Input() keys: string[];
    @Input() sons: string[];
    @Input() keysHijas: string[];
    @Input() buscado: any[] = [];
    errorMessage: any;

    @Output() testO = new EventEmitter();
    @Output() deleteO = new EventEmitter();

    constructor(public appservice: AppServices, public utils: UtilsServices) {
    }

    //Saca las claves y los tipos de los elementos, asi como los campos opcionales
    ngOnInit() {
        this.iniciarBuscado();
    }

    //Resetea el valor del buscador al cambiar la estructura de datos
    ngOnChanges(changes: SimpleChanges) {
        if (changes['keys'])
        this.iniciarBuscado();
    }

    iniciarBuscado() {
        this.keys.forEach(k => {
            if (this.tipes[k] != "object")
                this.buscado[k] = null;
        })
        this.keysHijas.forEach(k => {
            if (this.tipes[k] != "object")
                this.buscado[k] = null;
        })
    }

    buscar(post: any) {
        let vacio = true
        this.keys.forEach(key => {
            if (this.tipes[key] != "object") {
                if (String(post[key]).toLowerCase().indexOf(String(this.buscado[key]).trim()) == -1 && this.buscado[key] != null)
                    vacio = false;
            }
        });
        this.keysHijas.forEach(keyH => {
            if (this.tipes[keyH] != "object") {
                if (String(post[this.sons[keyH]][keyH]).toLowerCase().indexOf(String(this.buscado[keyH]).trim()) == -1 && this.buscado[keyH] != null)
                    vacio = false;
            }
        });
        return vacio;
    }

    //Pasa los valores del post objetivo al formulario, en el cual se podra modificar
    alform(post: any) {
        this.test = JSON.parse(JSON.stringify(post));
        this.testO.emit(this.test);
    }

    //Elimina el objeto correspondiente.
    delet(post: any) {
        this.appservice.delete(AppSettings.DATA2 + this.api + "/", post.id).subscribe(
            data => null,
            error => this.errorMessage = <any>error,
            () => this.appservice.getJSON(AppSettings.DATA2 + this.api + "/").subscribe(res =>
                this.datos = res,
                error => this.errorMessage = <any>error,
                () => this.deleteO.emit(this.datos)
            )
        );
    }

    resaltar() {
        if (this.campos) {
            if (this.campos.length > 0) {
                let est: boolean;
                let camposAux: string[] = []
                let aux: any[] = [];
                Object.keys(this.campos).forEach(ids => {
                    aux.push(ids);
                })
                aux.forEach(id => {
                    Object.keys(this.campos[id]).forEach(cKey => {
                        if (camposAux[cKey] != cKey)
                            camposAux[cKey] = cKey
                    });
                });
                Object.keys(camposAux).forEach(ca => {
                    if (!this.tipes[ca])
                        est = false;
                    else
                        est = true;
                });
                return est;
            }
        }
        else
            return false;
    }

}