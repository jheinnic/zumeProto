///<reference path="../../../node_modules/class-transformer/index.d.ts"/>
/**
 * Created by jheinnic on 5/26/17.
 */

import {plainToClass} from "class-transformer";

export class Foo {
    name: string;
    value: number;
    future: Promise<Foo>;

    constructor(val: number, name: string) {
        this.value = val;
        this.name = name;

    }

    print_it() {
        console.log(this.name, this.value)
    }
}

let foo = new Foo(24, "Fred");
let foo_str = JSON.stringify(foo);
foo.print_it();

let refoo = JSON.parse(foo_str);
refoo = plainToClass(Foo, refoo);
refoo.print_it();
