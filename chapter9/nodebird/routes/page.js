//(2)
const express  = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.get('/profile',isLoggedIn, (req, res) => { 
    // login체크 해줄려고 중간에 isLoggedIn넣음
    res.render('profile', {title:'내 정보 - NodeBird', user: req.user}); 
                                    //로그인 된 환경이니 req.user 사용가능
});

router.get('/join',isNotLoggedIn, (req,res) =>{
    //회원가입 됬는데 로그인 또하는건 의미없으니 isNotLoggedIn사용
    res.render('join',{
        title: '회원가입 - NodeBird',
        user : req.user,
        joinError: req.flash('joinErorr'),        
    });
});

router.get('/', (req,res, next) => {//(2)
    res.render('main',       //pug
    {                        //json 형태로 pug파일에 전달할 데이터 내용
        title : '2조프로젝트ㅠㅠ', 
        twits : [], 
        user : req.user,
        loginerror : req.flash('loginError'),
    });
});

module.exports = router;