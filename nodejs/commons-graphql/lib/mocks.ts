const casual = require('casual');

const playerSample = require('./graphql/stt/player/sample.json');
const numCrew = playerSample.crew.length;

const mocks = {
   String: () => 'It works!',
   Character: () => playerSample,
   Crew: () => playerSample.crew[casual.integer() % numCrew]
};

export default mocks;
