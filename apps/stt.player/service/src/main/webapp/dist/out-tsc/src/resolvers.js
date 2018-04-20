"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectors_1 = require("./connectors");
var resolvers = {
    Query: {
        author: function (_, args) {
            return connectors_1.Author.find({ where: args });
        },
        allAuthors: function (_, args) {
            return connectors_1.Author.findAll();
        },
        playerById: function (_, args) {
            return connectors_1.SttPlayer.findById(args['id']);
        }
    },
    Author: {
        posts: function (author) {
            return author.getPosts();
        }
    },
    Post: {
        author: function (post) {
            return post.getAuthor();
        },
        views: function (post) {
            return connectors_1.View.findOne({ postId: post.id }).then(function (view) { return view.views; });
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map