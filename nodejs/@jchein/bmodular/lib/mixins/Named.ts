/**
 * Created by jheinnic on 3/24/17.
 */
import {MixinConstructor} from '../datamodel/CallSignatures';

// ODOT: Constrain this to a base model for domain models?
export function Named(Base: MixinConstructor, index: number = 0) {
    return class MixedInNamed extends Base {
        _name: string;
        _description: string;
        _tag: string;

        constructor(...args: any[]) {
            super(args);
            this._name = args[index];
        }

        public get name(): string {
            return this._name;
        }

        public set name(value: string) {
            this._name = value;
        }

        public get description(): string {
            return this._description;
        }

        public set description(value: string) {
            this._description = value;
        }

        public get tag(): string {
            return this.tag;
        }

        public set tag(value: string) {
            this._tag = value;
        }
    }
}
