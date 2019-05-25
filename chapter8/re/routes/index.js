//index.js역활
//모든 유저의 값을 mongoose에 보내주면서 렌더링 할 뿐이다.
//get이니까 목록을 표시할 뿐임
var express = require('express');
var Usr = require('../schemas/usr');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Usr.find({}) // 모든 사용자를 찾는다 {}
    .then((users) =>{ //찾은 값들은 내가 지정한 users에 들어감
      res.render('mongoose',{users}); //이 users를 mongoose에 보내줌
    })
    .catch((err)=>{ // 에러발생시 err변수에 값저장
      console.error(err); // err띄우고
      next(err); // err값을 다음 미들웨어?에 던짐
    });
});

module.exports = router;



//async/await문법사용
// router.get('/', function(req,res, next){
//   try{
//     const users = await Usr.find({});
//     res.render('mongoose',{users});
//   }catch(error){
//       console.error(err);
//       next(err);
//   }
// });
