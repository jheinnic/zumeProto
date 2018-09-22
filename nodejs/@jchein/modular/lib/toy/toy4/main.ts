/**
 * Created by jheinnic on 5/10/17.
 */

import "./FooOne/tokens"
import "./dsFw/tokens"
import {ToyRegistry} from "./ToyRegistry";
import {DsFwFactoryMixin, DsFwBundle} from "./dsFw/mixins";
import {FooOneBundle, FooOneToyMixin} from "./FooOne/mixins";
// import * from "./dsFw/tokens";
// import * from "./FooOne/tokens";

let toyReg = new ToyRegistry();

let A = FooOneToyMixin(DsFwFactoryMixin(ToyRegistry));
let B = new A();
console.log(B);

B

console.log(B.bb);

const C = DsFwFactoryMixin(ToyRegistry);
let D = new C();

