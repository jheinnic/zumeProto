"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Constrain this to a base model for domain models?
function Named(Base, index = 0) {
    return class MixedInNamed extends Base {
        constructor(...args) {
            super(args);
            this._name = args[index];
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            this._description = value;
        }
        get tag() {
            return this.tag;
        }
        set tag(value) {
            this._tag = value;
        }
    };
}
//# sourceMappingURL=Named.js.map