"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// when a module is loaded @provide() will automatically register it
require("../OLD/utils/mongodb/client");
require("../modules/core/messaging/client-topic-registry");
require("../OLD/utils/kafka/event-bus");
require("../controller/home");
require("../controller/user");
require("../OLD/service/user");
//# sourceMappingURL=loader.js.map