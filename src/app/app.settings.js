define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppSettings = (function () {
        function AppSettings() {
        }
        AppSettings.DATA2 = "http://localhost:3000/";
        AppSettings.DATA3 = "http://localhost:4000/";
        AppSettings.dateFormat1 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
        AppSettings.dateFormat2 = /^\d{4}-\d{2}-\d{2}/;
        return AppSettings;
    }());
    exports.AppSettings = AppSettings;
});
//# sourceMappingURL=app.settings.js.map