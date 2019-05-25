//사용자 로딩,생성에 사용됨
//get(로딩)과 post(생성)임
var express = require('express');
var Usr = require('../schemas/usr');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Usr.find({})// 전체 조회는 index에도 있는데 차이점은 이곳은 json으로 반환함
    .then((users)=>{
      res.json(users); //json 형식으로 users를 보냄.
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.post('/', function(req,res,next){
  const user = new Usr({
    name: req.body.name,
    age:req.body.age,
    married:req.body.married,
  });
  user.save() //usr는 mongoose 상속받았기에 save()가능
    .then((result)=>{
      console.log("user save 결과 : " + result);
      res.status(201).json(result); // save성공 시 status 201전송과 함께 result 변수에 들은것도 보내줌
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

module.exports = router;

//async/await
// router.get('/', function (req, res, next) {
//   try {
//     const users = await Usr.find({});
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

// router.post('/', function (req, res, next) {
//   const user = new Usr({
//     name: req.body.name,
//     age: req.body.age,
//     married: req.body.married,
//   });
//   try {
//     const result = await user.save();
//     console.log('결과 : ' + result);
//     res.status(201).json(result);
//   }catch(err){
//     console.error(err);
//     next(err);
//   }
// });