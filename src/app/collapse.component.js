var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CollapseComponent = (function () {
        function CollapseComponent() {
            this.isOpen = false;
            this.opened = new core_1.EventEmitter();
            this.closed = new core_1.EventEmitter();
        }
        CollapseComponent.prototype.toggle = function () {
            this.isOpen = !this.isOpen;
            this.isOpen ? this.opened.emit() : this.closed.emit();
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], CollapseComponent.prototype, "nombre", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CollapseComponent.prototype, "isOpen", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], CollapseComponent.prototype, "opened", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", Object)
        ], CollapseComponent.prototype, "closed", void 0);
        CollapseComponent = __decorate([
            core_1.Component({
                selector: 'my-collap',
                templateUrl: 'app/collapse.component.html'
            })
        ], CollapseComponent);
        return CollapseComponent;
    }());
    exports.CollapseComponent = CollapseComponent;
});
//# sourceMappingURL=collapse.component.js.map