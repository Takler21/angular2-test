var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', 'moment'], function (require, exports, core_1, moment) {
    "use strict";
    var AppComponent = (function () {
        function AppComponent() {
            this.minDate = null;
            this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
            this.format = this.formats[0];
            this.dateOptions = {
                formatYear: 'YY',
                startingDay: 1
            };
            this.opened = false;
        }
        AppComponent.prototype.ngOnInit = function () {
            moment.locales;
        };
        AppComponent.prototype.getDate = function () {
            return this.dt && this.dt.getTime() || new Date().getTime();
        };
        AppComponent = __decorate([
            core_1.Component({
                selector: 'my-app',
                template: "\n        <div style=\"display:inline-block;\">\n        <input type=\"text\">\n            <div style=\"min-height:290px;\">\n                <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"false\" [startingDay]=\"1\"></datepicker>\n            </div>\n        </div>\n  ",
            }), 
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=datapciker.component.js.map