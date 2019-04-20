// 'use strict';

// const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); //반환 값이 객체라서 대문자 사용
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; //env로 노드 환경 개발자로.  
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  const sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize; // sequelize 의 인스턴스
db.Sequelize = Sequelize; // sequelize 의 생성자
// db ==> {sequelize: sequelize, Sequelize: Sequelize}
//db['sequelize'] = sequelize

db.User = require('./user')(sequelize,Sequelize);
//db.Comment

module.exports = db;
