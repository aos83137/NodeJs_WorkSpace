const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env]; // config.json json 생략가능
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//model들의 관계설정
db.User = require('./user')(sequelize, Sequelize); //함수를 require했으니 인수 두개 던져줌
db.Post = require('./post')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
//db라는 객체가 만들어 졌네?!

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
//1:N 관계 - 사용자는 여러개의 개시글을 사용할 수 있다.

db.Post.belongsToMany(db.Hashtag, {
  through: 'PostHashtag'
});
db.Hashtag.belongsToMany(db.Post, {
  through: 'PostHashtag'
}); //1:N밖에 못 만들기때문에 위와 아래 같이 through한것
// N:M 관계 - 테그와 게시물의 관계임
// 자동생성 필드 : postId, hashTagId
db.User.belongsToMany(db.User, { //364p 확인
  foreignKey: 'followingId',
  as: 'Followers',
  through: 'Follow',
});

db.User.belongsToMany(db.User, {
  foreignKey: 'followerId',
  as: 'Followings',
  through: 'Follow',
});
//중간관계 Follow 테이블에 followingId, followerId 필드 생김
module.exports = db;
