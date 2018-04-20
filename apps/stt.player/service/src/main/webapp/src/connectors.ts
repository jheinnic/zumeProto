// at the top with imports:
import * as Mongoose from 'mongoose';
import * as Sequelize from 'sequelize';
import * as casual from 'casual';
import * as _ from 'lodash';

// somewhere in the middle:
Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/views', {
   useMongoClient: true
});
const db = new Sequelize('blog', null, null, {
   dialect: 'sqlite',
   storage: './blog.sqlite',
});

const AuthorModel = db.define('author', {
   firstName: { type: Sequelize.STRING },
   lastName: { type: Sequelize.STRING },
});

const PostModel = db.define('post', {
   title: { type: Sequelize.STRING },
   text: { type: Sequelize.STRING },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

const ViewSchema = Mongoose.Schema({
   postId: Number,
   views: Number,
});

// add this somewhere in the middle
const SttPlayer = {
   findById(id: string) {
      return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
            .then(res => res.json())
            .then(res => {
               return res[0].fortune.message;
            });
   },
};

const Author = db.models.author;
const Post = db.models.post;
const View = Mongoose.model('views', ViewSchema);

// modify the mock data creation to also create some views:
casual.seed(123);
db.sync({ force: true }).then(() => {
   _.times(10, () => {
      return AuthorModel.create({
         firstName: casual.first_name,
         lastName: casual.last_name,
      }).then((author) => {
         return author.createPost({
            title: `A post by ${author.firstName}`,
            text: casual.sentences(3),
         }).then((post) => { // <- the new part starts here
            // create some View mocks
            return View.update(
                  { postId: post.id },
                  { views: casual.integer(0, 100) },
                  { upsert: true });
         });
      });
   });
});

// at the bottom, add View to the exports
export { Author, Post, View, SttPlayer };
