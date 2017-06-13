var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', './search.service', './app.settings'], function (require, exports, core_1, search_service_1, app_settings_1) {
    "use strict";
    var App2Component = (function () {
        function App2Component(appservice) {
            this.appservice = appservice;
        }
        App2Component.prototype.ngOnInit = function () {
            var _this = this;
            this.appservice.getJSON(app_settings_1.AppSettings.DATA2 + "db").subscribe(function (res) {
                return _this.bbdd = Object.keys(res);
            }, function (error) { return _this.errorMessage = error; }, function () {
                if (_this.bbdd.length > 1)
                    _this.dobleVal = false;
                else
                    _this.dobleVal = null;
            });
        };
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Array)
        ], App2Component.prototype, "bbdd", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', Boolean)
        ], App2Component.prototype, "dobleVal", void 0);
        App2Component = __decorate([
            core_1.Component({
                selector: 'my-appF',
                template: "\n    <template [ngIf]=\"bbdd?.length == 1 ||(bbdd?.length > 1 && !dobleVal)\">\n        <div class=\"container\" id=\"main\">   \n            <div class=\"center-block\">\n            <div id=\"header\"></div>\n                <my-app *ngIf=\"dobleVal==null\" [bbdd]=\"bbdd\" [dobleVal]=\"dobleVal\">Loading...</my-app>\n                <my-app *ngIf=\"dobleVal!=null\" [bbdd]=\"bbdd\" [dobleVal]=\"dobleVal\" (doble)=\"dobleVal = $event\">Loading...</my-app>\n            </div>\n        </div>\n    </template>\n    <template [ngIf]=\"bbdd?.length > 1 && dobleVal\">\n        <div class=\"container\" id=\"main\" style=\"width:97%;\">   \n            <div class=\"center-block\">\n                <div class=\"comp1\">\n                    <my-app [bbdd]=\"bbdd\" [dobleVal]=\"dobleVal\" (doble)=\"dobleVal = $event\">Loading...</my-app>\n                </div>\n                <div class=\"comp2\">\n                    <my-app [api]=\"bbdd[1]\" [bbdd]=\"bbdd\" [dobleVal]=\"dobleVal\" (doble)=\"dobleVal = $event\">Loading...</my-app>\n                </div>\n            </div>\n        </div>\n    </template>\n  \n\n",
                providers: [search_service_1.AppServices],
            }), 
            __metadata('design:paramtypes', [search_service_1.AppServices])
        ], App2Component);
        return App2Component;
    }());
    exports.App2Component = App2Component;
});
//# sourceMappingURL=appFull.component.js.map