import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import {Route} from '@angular/router';


@Injectable()
export class UtilsServices {

    //
    public resaltar(campos: any[], tipes: string[]) {
        if (campos) {
            if (campos.length > 0) {
                let est: boolean;
                let camposAux: string[] = []
                let aux: any[] = [];
                Object.keys(campos).forEach(ids => {
                    aux.push(ids);
                })
                aux.forEach(id => {
                    Object.keys(campos[id]).forEach(cKey => {
                        if (camposAux[cKey] != cKey)
                            camposAux[cKey] = cKey
                    });
                });
                Object.keys(camposAux).forEach(ca => {
                    if (!tipes[ca])
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

    public isObject(val: any) { return typeof val === 'object'; }

    public isType(val: any) { return typeof val; }

}

