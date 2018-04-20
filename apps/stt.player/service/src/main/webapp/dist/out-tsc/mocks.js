"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var casual = require('casual');
var playerSample = require('../graphql/stt/player/sample.json');
var numCrew = playerSample.crew.length;
var mocks = {
    String: function () { return 'It works!'; },
    Character: function () { return playerSample; },
    Crew: function () { return playerSample.crew[casual.integer() % numCrew]; }
};
exports.default = mocks;
//# sourceMappingURL=mocks.js.map