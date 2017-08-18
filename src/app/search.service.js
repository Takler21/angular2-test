var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/http", "rxjs/Rx", "rxjs/add/operator/map", "rxjs/add/operator/catch"], function (require, exports, core_1, http_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppServices = (function () {
        function AppServices(http, jsonp) {
            this.http = http;
            this.jsonp = jsonp;
            this.headers = new http_1.Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            });
        }
        AppServices.prototype.getJSON = function (url) {
            return this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                console.log(error);
                return Rx_1.Observable.throw(error);
            });
            //tal vez deberia quitar el catch?, 
        };
        AppServices.prototype.add = function (url, body) {
            var options = new http_1.RequestOptions({
                method: http_1.RequestMethod.Post,
                headers: this.headers,
                body: JSON.stringify(body),
                url: url
            });
            return this.http.request(new http_1.Request(options));
        };
        AppServices.prototype.update = function (url, body) {
            var options = new http_1.RequestOptions({
                method: http_1.RequestMethod.Put,
                headers: this.headers,
                body: JSON.stringify(body),
                url: url + body.id
            });
            return this.http.request(new http_1.Request(options));
        };
        AppServices.prototype.delete = function (url, id) {
            var aux;
            var options = new http_1.RequestOptions({
                method: http_1.RequestMethod.Delete,
                headers: this.headers,
                url: url + id
            });
            return this.http.request(new http_1.Request(options));
        };
        AppServices = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
        ], AppServices);
        return AppServices;
    }());
    exports.AppServices = AppServices;
});
// let bodyString = JSON.stringify(body); // Stringify payload
//let headers = new Headers({ 'Content-Type': 'application/json' });
//return this.http.post("data.json", JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })
//  .map((res: Response) => res.json())
//  .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
//# sourceMappingURL=search.service.js.map