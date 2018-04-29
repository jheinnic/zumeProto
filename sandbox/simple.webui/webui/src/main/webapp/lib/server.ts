export class HelloWorld {
	constructor() { }

	sayIt(): void {
		console.log("Hello World!");
	}
}

let helloWorld: HelloWorld = new HelloWorld();
helloWorld.sayIt();

import { callExample } from "./client";
console.log(callExample());
