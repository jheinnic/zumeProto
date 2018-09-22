/**
 * Created by jheinnic on 3/24/17.
 */
// import {Named} from "./Named";

class BaseDemo {
    _id: string;

    constructor(_id: string, name: string) {
        this._id = _id;
    }

    get id(): string {
        return this._id;
    }
}
// const NamedDemo = Named(BaseDemo, 1);

// const foo = new NamedDemo("id", "name");

// foo.id === "id";
// foo.name === "id";
// foo.name === "name";
// foo.tag = "d";
// foo.tag;
