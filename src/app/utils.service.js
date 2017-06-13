var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    var UtilsServices = (function () {
        function UtilsServices() {
        }
        UtilsServices.prototype.resaltar = function (campos, tipes) {
            if (campos) {
                if (campos.length > 0) {
                    var est_1;
                    var camposAux_1 = [];
                    var aux_1 = [];
                    Object.keys(campos).forEach(function (ids) {
                        aux_1.push(ids);
                    });
                    aux_1.forEach(function (id) {
                        Object.keys(campos[id]).forEach(function (cKey) {
                            if (camposAux_1[cKey] != cKey)
                                camposAux_1[cKey] = cKey;
                        });
                    });
                    Object.keys(camposAux_1).forEach(function (ca) {
                        if (!tipes[ca])
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
        UtilsServices.prototype.isObject = function (val) { return typeof val === 'object'; };
        UtilsServices.prototype.isType = function (val) { return typeof val; };
        UtilsServices = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], UtilsServices);
        return UtilsServices;
    }());
    exports.UtilsServices = UtilsServices;
});
//# sourceMappingURL=utils.service.js.map