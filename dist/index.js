"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorsList_1 = require("./errorsList");
function MerrorHandler(err, req, res, next) {
    if (err.isHttpError) {
        const errorItem = errorsList_1.default.find((errorItem) => parseInt(errorItem.code) === err.statusCode);
        if (errorItem) {
            res.status(err.statusCode)
                .send({
                "success": false,
                "statusCode": err.statusCode,
                "error": errorItem.phrase,
                "message": err.message,
                "properties": err.properties
            });
        }
        else {
            return next(new Error("There's no HTTP error with provided statusCode"));
        }
    }
    return next(err);
}
exports.MerrorHandler = MerrorHandler;
function MerrorMiddleware() {
    return MerrorHandler;
}
exports.MerrorMiddleware = MerrorMiddleware;
var errorsList_2 = require("./errorsList");
exports.HttpErrorsList = errorsList_2.default;
var merrorConstructor_1 = require("./merrorConstructor");
exports.Merror = merrorConstructor_1.default;
//# sourceMappingURL=index.js.map