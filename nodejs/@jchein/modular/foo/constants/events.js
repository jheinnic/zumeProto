"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = {
    // These commands are authorized when queued by an authenticated user with the appropriate market principal.
    BidPlaced: 'BidPlaced',
    BidCancelled: 'BidCancelled',
    // This command is authorized when queued by an authenticated user with the admin role principal.
    AuctionCreated: 'AuctionCreated',
    // These Commands are authorized when queued by a process with the auction service principal.
    BidAccepted: 'BidAccepted',
    BidRejected: 'BidRejected',
};
exports.default = exports.EVENTS;
//# sourceMappingURL=events.js.map