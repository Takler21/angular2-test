var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./search.service", "./app.settings", "./utils.service"], function (require, exports, core_1, search_service_1, app_settings_1, utils_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BuscadorTablaComponent = (function () {
        function BuscadorTablaComponent(appservice, utils) {
            this.appservice = appservice;
            this.utils = utils;
            this.buscado = [];
            this.testO = new core_1.EventEmitter();
            this.deleteO = new core_1.EventEmitter();
        }
        //Saca las claves y los tipos de los elementos, asi como los campos opcionales
        BuscadorTablaComponent.prototype.ngOnInit = function () {
            this.iniciarBuscado();
        };
        //Resetea el valor del buscador al cambiar la estructura de datos
        BuscadorTablaComponent.prototype.ngOnChanges = function (changes) {
            if (changes['keys'])
                this.iniciarBuscado();
        };
        BuscadorTablaComponent.prototype.iniciarBuscado = function () {
            var _this = this;
            this.keys.forEach(function (k) {
                if (_this.tipes[k] != "object")
                    _this.buscado[k] = null;
            });
            this.keysHijas.forEach(function (k) {
                if (_this.tipes[k] != "object")
                    _this.buscado[k] = null;
            });
        };
        BuscadorTablaComponent.prototype.buscar = function (post) {
            var _this = this;
            var vacio = true;
            this.keys.forEach(function (key) {
                if (_this.tipes[key] != "object") {
                    if (String(post[key]).toLowerCase().indexOf(String(_this.buscado[key]).trim()) == -1 && _this.buscado[key] != null)
                        vacio = false;
                }
            });
            this.keysHijas.forEach(function (keyH) {
                if (_this.tipes[keyH] != "object") {
                    if (String(post[_this.sons[keyH]][keyH]).toLowerCase().indexOf(String(_this.buscado[keyH]).trim()) == -1 && _this.buscado[keyH] != null)
                        vacio = false;
                }
            });
            return vacio;
        };
        //Pasa los valores del post objetivo al formulario, en el cual se podra modificar
        BuscadorTablaComponent.prototype.alform = function (post) {
            this.test = JSON.parse(JSON.stringify(post));
            this.testO.emit(this.test);
        };
        //Elimina el objeto correspondiente.
        BuscadorTablaComponent.prototype.delet = function (post) {
            var _this = this;
            this.appservice.delete(app_settings_1.AppSettings.DATA2 + this.api + "/", post.id).subscribe(function (data) { return null; }, function (error) { return _this.errorMessage = error; }, function () { return _this.appservice.getJSON(app_settings_1.AppSettings.DATA2 + _this.api + "/").subscribe(function (res) {
                return _this.datos = res;
            }, function (error) { return _this.errorMessage = error; }, function () { return _this.deleteO.emit(_this.datos); }); });
        };
        BuscadorTablaComponent.prototype.resaltar = function () {
            var _this = this;
            if (this.campos) {
                if (this.campos.length > 0) {
                    var est_1;
                    var camposAux_1 = [];
                    var aux_1 = [];
                    Object.keys(this.campos).forEach(function (ids) {
                        aux_1.push(ids);
                    });
                    aux_1.forEach(function (id) {
                        Object.keys(_this.campos[id]).forEach(function (cKey) {
                            if (camposAux_1[cKey] != cKey)
                                camposAux_1[cKey] = cKey;
                        });
                    });
                    Object.keys(camposAux_1).forEach(function (ca) {
                        if (!_this.tipes[ca])
                            est_1 = false;
                        else
                            est_1 = true;
                    });
                    return est_1;
                }
            }
            else
                return false;
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "datos", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], BuscadorTablaComponent.prototype, "test", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], BuscadorTablaComponent.prototype, "api", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "campos", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "tipes", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "keys", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "sons", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "keysHijas", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Array)
        ], BuscadorTablaComponent.prototype, "buscado", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], BuscadorTablaComponent.prototype, "testO", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], BuscadorTablaComponent.prototype, "deleteO", void 0);
        BuscadorTablaComponent = __decorate([
            core_1.Component({
                selector: 'buscador-tabla',
                templateUrl: "app/buscadorTabla.component.html",
                providers: [search_service_1.AppServices, utils_service_1.UtilsServices],
            }),
            __metadata("design:paramtypes", [search_service_1.AppServices, utils_service_1.UtilsServices])
        ], BuscadorTablaComponent);
        return BuscadorTablaComponent;
    }());
    exports.BuscadorTablaComponent = BuscadorTablaComponent;
});
//# sourceMappingURL=buscadorTabla.component.js.map