var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortPipe = (function () {
        function SortPipe() {
        }
        SortPipe.prototype.transform = function (array, args) {
            if (array) {
                array.sort(function (a, b) {
                    if (a[args] < b[args]) {
                        return -1;
                    }
                    else if (a[args] > b[args]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                return array;
            }
        };
        SortPipe = __decorate([
            core_1.Pipe({ name: "sortBy" })
        ], SortPipe);
        return SortPipe;
    }());
    exports.SortPipe = SortPipe;
});
//# sourceMappingURL=sort.pipe.js.map