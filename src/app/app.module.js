var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '@angular/router', '@angular/platform-browser', '@angular/forms', '@angular/http', 'ng2-bootstrap', './appFull.component', './app.component', './collapse.component', './formR.component', './formNoR.component', './resaltar.component', './sort.pipe', './buscadorTabla.component', './datepicker.component', 'moment/locale/es'], function (require, exports, core_1, router_1, platform_browser_1, forms_1, http_1, ng2_bootstrap_1, appFull_component_1, app_component_1, collapse_component_1, formR_component_1, formNoR_component_1, resaltar_component_1, sort_pipe_1, buscadorTabla_component_1, datepicker_component_1) {
    "use strict";
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, ng2_bootstrap_1.DatepickerModule.forRoot(), ng2_bootstrap_1.AlertModule.forRoot(), ng2_bootstrap_1.TypeaheadModule.forRoot()],
                declarations: [appFull_component_1.App2Component, app_component_1.AppComponent, collapse_component_1.CollapseComponent, sort_pipe_1.SortPipe, formR_component_1.FormReq, formNoR_component_1.FormNoReq, resaltar_component_1.ResaltarComponent, buscadorTabla_component_1.BuscadorTablaComponent, datepicker_component_1.DateComponent],
                providers: [sort_pipe_1.SortPipe],
                bootstrap: [appFull_component_1.App2Component]
            }), 
            __metadata('design:paramtypes', [])
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map