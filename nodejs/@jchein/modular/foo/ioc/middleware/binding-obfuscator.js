"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BindingObfuscator {
    constructor(val) {
        this.label = val;
    }
    getMiddlewareFunction() {
        function obfuscateBindings(planAndResolve) {
            return (args) => {
                let nextContextInterceptor = args.contextInterceptor;
                args.contextInterceptor = (context) => {
                    console.log(this.label, context);
                    return nextContextInterceptor(context);
                };
                return planAndResolve(args);
            };
        }
        return obfuscateBindings;
    }
}
exports.BindingObfuscator = BindingObfuscator;
//# sourceMappingURL=binding-obfuscator.js.map