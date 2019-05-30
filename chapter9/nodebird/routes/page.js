//(2)
const express  = require('express');

const router = express.Router();

router.get('/profile', (req, res) => {
    res.render('profile', {title:'내 정보 - NodeBird', user: null});
});

router.get('/join', (req, res) =>{
    res.render('join',{
        title: '회원가입 - NodeBird',
        user : null,
        joinError: req.flash('joinErorr'),        
    });
});

router.get('/', (req,res, next) => {//(2)
    res.render('main',       //pug
    {                        //json 형태로 pug파일에 전달할 데이터 내용
        title : '2조프로젝트ㅠㅠ', 
        twits : [], 
        user : null,
        loginerror : req.flash('loginError'),
    });
});

module.exports = router;