import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {DatePipe} from '@angular/common'
import * as moment from 'moment';

@Component({
    selector: 'date-p',
    template: `
          
                <datepicker style="display:inline-block;" [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="false" [startingDay]="1" [onlyCurrentMonth]="true" (click)="manda()"></datepicker>

  `,
    providers: [DatePipe],
})
export class DateComponent implements OnInit, OnChanges {
    @Input() dat: any;
    @Input() dt: Date = new Date();
    @Input() ocult: boolean;
    private minDate: Date = null;
    private events: Array<any>;
    private tomorrow: Date;
    private afterTomorrow: Date;
    private formats: Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
    private format = this.formats[0];
    @Output() mandar = new EventEmitter();
    @Output() ocultF = new EventEmitter();
    man: any;

    constructor(public datepipe: DatePipe) { }

    private dateOptions: any = {
        formatYear: 'YY',
        startingDay: 1
    };

    ngOnInit() {
        if (this.dat)
            this.dt = new Date(this.dat)
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['dat']) {
            let a = new Date(this.dat)
            if (!isNaN(a.getTime())) {
                if (this.dat)
                    this.dt = new Date(this.dat)
            }
        }
    }
    manda(changes: SimpleChanges) {
        if (this.dat != this.datepipe.transform(this.dt, 'yyyy-MM-dd')) {
            this.man = this.datepipe.transform(this.dt, 'yyyy-MM-dd');
            this.mandar.emit(this.man);
            this.ocultF.emit(!this.ocult);
        }
    }

    private opened: boolean = false;

    public getDate(): number {
        return this.dt && this.dt.getTime() || new Date().getTime();

    }
}

