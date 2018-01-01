"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Merror extends Error {
    constructor(statusCode, message = "", properties = {}, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Merror);
        }
        this.isHttpError = true;
        this.statusCode = statusCode || 500;
        this.message = message;
        this.properties = properties;
    }
}
;
exports.default = Merror;
//# sourceMappingURL=merrorConstructor.js.map