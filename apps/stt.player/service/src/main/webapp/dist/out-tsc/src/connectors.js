"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// at the top with imports:
var Mongoose = require("mongoose");
var Sequelize = require("sequelize");
var casual = require("casual");
var _ = require("lodash");
// somewhere in the middle:
Mongoose.Promise = global.Promise;
var mongo = Mongoose.connect('mongodb://localhost/views', {
    useMongoClient: true
});
var db = new Sequelize('blog', null, null, {
    dialect: 'sqlite',
    storage: './blog.sqlite',
});
var AuthorModel = db.define('author', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
});
var PostModel = db.define('post', {
    title: { type: Sequelize.STRING },
    text: { type: Sequelize.STRING },
});
AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);
var ViewSchema = Mongoose.Schema({
    postId: Number,
    views: Number,
});
// add this somewhere in the middle
var SttPlayer = {
    findById: function (id) {
        return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
            .then(function (res) { return res.json(); })
            .then(function (res) {
            return res[0].fortune.message;
        });
    },
};
exports.SttPlayer = SttPlayer;
var Author = db.models.author;
exports.Author = Author;
var Post = db.models.post;
exports.Post = Post;
var View = Mongoose.model('views', ViewSchema);
exports.View = View;
// modify the mock data creation to also create some views:
casual.seed(123);
db.sync({ force: true }).then(function () {
    _.times(10, function () {
        return AuthorModel.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
        }).then(function (author) {
            return author.createPost({
                title: "A post by " + author.firstName,
                text: casual.sentences(3),
            }).then(function (post) {
                // create some View mocks
                return View.update({ postId: post.id }, { views: casual.integer(0, 100) }, { upsert: true });
            });
        });
    });
});
//# sourceMappingURL=connectors.js.map