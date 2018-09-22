"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMANDS = {
    // These commands are authorized when queued by an authenticated user with the appropriate market principal.
    PlaceBid: 'PlaceBid',
    CancelBid: 'CancelBid',
    // This command is authorized when queued by an authenticated user with the admin role principal.
    CreateAuction: 'CreateAuction',
    // These Commands are authorized when queued by a process with the auction service principal.
    AcceptBid: 'AcceptBid',
    RejectBid: 'RejectBid',
};
exports.default = exports.COMMANDS;
//# sourceMappingURL=commands.js.map