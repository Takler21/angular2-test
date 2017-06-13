import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import 'moment/locale/es';
import * as moment from 'moment';
import { DatepickerModule, AlertModule, TypeaheadModule } from 'ng2-bootstrap';
import {DatePipe} from '@angular/common';

import { App2Component }  from './appFull.component';
import { AppComponent }  from './app.component';
import { CollapseComponent } from './collapse.component';
import {FormReq} from './formR.component';
import {FormNoReq} from './formNoR.component';
import {ResaltarComponent} from './resaltar.component';
import {SortPipe} from './sort.pipe';
import {BuscadorTablaComponent} from './buscadorTabla.component';
import {DateComponent} from './datepicker.component'


@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule, HttpModule, JsonpModule, DatepickerModule.forRoot(), AlertModule.forRoot(), TypeaheadModule.forRoot()],
    declarations: [App2Component, AppComponent, CollapseComponent, SortPipe, FormReq, FormNoReq, ResaltarComponent, BuscadorTablaComponent, DateComponent],
    providers: [SortPipe],
    bootstrap: [App2Component ]
})
export class AppModule {
}
