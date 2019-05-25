//get(댓글표시),post(댓글생성),patch(댓글수정),delete(댓글삭제) 사용

var express = require('express');
var Cmnt = require('../schemas/cmnt');

var router = express.Router(); //express.Router함수를 사용하기위에 변수에 저장

router.get('/:id', function(req,res,next){
    Cmnt.find({commenter: req.params.id}).populate('commmenter') //id값에 맞는 commenter찾는다.
        .then((comments)=>{
            console.log("comments 내용들 : "+comments);
            res.json(comments);
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});

router.post('/', function (req, res, next) { //post니까 우선 값을 받아서 json으로 저장 후 save한다.
    const comment = new Cmnt({ //인수 json
        commenter : req.body.id, //이 id가 어디껀지 확인 mongoose.js 143의 변수인거같은데 나중에 마지막에 이름바꿔보기
        comment : req.body.comment,
    });
    comment.save()
        .then((result)=>{
            console.log("comment save 결과 : " + result);
            return Cmnt.populate(result, {path:'commenter'}); //책에는 js렌더링을 위한 함수라 적었는데 이해 안됨
                                        //path옵션으로 어떤 필드를 합칠지 설정함
        })//이것이 save한뒤 populate하는 방법이다!
        .then((result)=>{ // Cmnt.populate의 반환값이 일로옴 컬렉션의 다큐먼트들임
            console.log("comment populate 결과 : " + result);
            res.status(201).json(result);
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        });
});

router.patch('/:id', function(req,res,next){ //다큐먼트(행)
    Cmnt.update({commneter: req.params.id}, {comment: req.body.comment}) //comment어디껀지 확인이 안됨
        .then((result) => {
            res.json(result); //이건 왜 던져주는거지 어디 쓸라고?
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        });
});

router.delete('/:id', function(req,res,next){
    Comment.delete({commenter: req.params.id})
        .then((result)=>{
            res.json(result);
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});


module.exports = router;