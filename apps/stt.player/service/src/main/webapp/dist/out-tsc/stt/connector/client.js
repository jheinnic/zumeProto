"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {SuperAgent, SuperAgentRequest} 'superagent';
// import {Request, Response} from 'superagent';
var superagent_1 = require("superagent");
var CONFIG_1 = require("./CONFIG");
require("reflect-metadata");
var Client = /** @class */ (function () {
    function Client() {
        this._accessToken = '';
        this._autoLogin = false;
        this._agent = superagent_1.agent();
    }
    Client.prototype.login = function (username, password, autoLogin) {
        var _this = this;
        if (username === void 0) { username = 'jheinnic@hotmail.com'; }
        if (password === void 0) { password = 'Vdu+9gG2'; }
        if (autoLogin === void 0) { autoLogin = false; }
        return this._agent.post(CONFIG_1.default.URL_PLATFORM + "oauth2/token")
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
            "username": username,
            "password": password,
            "client_id": CONFIG_1.default.CLIENT_ID,
            "grant_type": "password"
        })
            .then(function (data) {
            if (data.error) {
                return Promise.reject(data.error);
            }
            else if (data.body.access_token) {
                return _this._loginWithAccessToken(data.body.access_token, autoLogin);
            }
            return Promise.reject("Invalid data for login!");
        })
            .catch(function (err) {
            console.error(err);
            return Promise.reject("Fatal error during login");
        });
    };
    Client.prototype._loginWithAccessToken = function (accessToken, autoLogin) {
        this._accessToken = accessToken;
        this._autoLogin = autoLogin;
        return Promise.resolve(accessToken);
    };
    Client.prototype._enrichApiTokens = function (qs) {
        if (qs === void 0) { qs = {}; }
        return Object.assign({ client_api: CONFIG_1.default.CLIENT_API_VERSION, access_token: this._accessToken }, qs);
    };
    Client.prototype._executeGetRequest = function (resourceUrl, qs) {
        if (qs === void 0) { qs = {}; }
        if (this._accessToken === undefined) {
            return Promise.reject("Not logged in!");
        }
        var apiQuery = this._enrichApiTokens(qs);
        return this._agent.get(CONFIG_1.default.URL_SERVER + resourceUrl)
            .query(apiQuery)
            .then(function (resp) {
            return Promise.resolve(resp.body);
        })
            .catch(function (err) {
            console.error(err);
            return Promise.reject("Fatal error for call to " + resourceUrl);
        });
    };
    Client.prototype.loadPlayerData = function () {
        var _this = this;
        var apiQuery = this._enrichApiTokens();
        return this._agent.get(CONFIG_1.default.URL_SERVER + "player")
            .query(apiQuery)
            .then(function (data) {
            if (data.ok) {
                // this._playerData = plainToClass(PlayerData, data.body.playerData);
                _this._playerData = data.body.player;
                console.info("Loaded player data: ", data.body.player);
                return Promise.resolve(_this._playerData);
            }
            return Promise.reject("Invalid player data!!");
        })
            .catch(function (err) {
            console.error(err);
            return Promise.reject("Fatal error when loading player data");
        });
    };
    return Client;
}());
exports.Client = Client;
var client = new Client();
client.login()
    .then(function (value) {
    console.log(value);
    return Promise.resolve({ accessToken: value });
})
    .then(function (outerValue) {
    return client.loadPlayerData()
        .then(function (innerValue) {
        return Promise.resolve(Object.assign({ playerData: innerValue }, outerValue));
    });
})
    .then(function (value) {
    console.log(JSON.stringify(value));
    return (value);
})
    .catch(function (err) {
    console.error(err);
});
//# sourceMappingURL=client.js.map