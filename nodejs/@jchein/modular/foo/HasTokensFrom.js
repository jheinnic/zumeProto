"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jheinnic on 5/7/17.
 */
var dist_1 = require("@bstock/metajs/dist");
var attachAnnotation = dist_1.Annotator.makeClassAnnotation(HasTokensFromAnnotation);
var handler = {
    apply: function (target, thisArgument, argumentsList) {
        console.log("HasTokensFrom called: " + new Date().getTime());
        console.log(target, thisArgument, argumentsList);
    }
};
exports.HasTokensFrom = new Proxy(attachAnnotation, handler);
