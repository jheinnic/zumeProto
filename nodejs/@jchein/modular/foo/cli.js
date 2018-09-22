"use strict";
/**
 * Created by jheinnic on 3/29/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pigato_1 = require("pigato");
require("./ioc/loader");
const queryClient = new pigato_1.Client("tcp://localhost:5555", {
    prefix: "prefix",
    autostart: true,
    onConnect: function () {
        console.log('Event Bus query client connected');
    },
    onDisconnect: function () {
        console.log('Event Bus query client disconnected');
    }
});
queryClient.start();
queryClient.request('shardControl-v1/bids', 'foo', { timeout: 120000 }).pipe(process.stdout, process.stderr);
//# sourceMappingURL=cli.js.map