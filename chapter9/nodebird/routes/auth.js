const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {
    isLoggedIn,
    isNotLoggedIn
} = require('./middlewares');
const {
    User
} = require('../models');

const router = express.Router();

//로그인 안됬을때 사용하는 함수
router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const {
        email,
        nick,
        password
    } = req.body; //req의 body에서 email, nick, password를 가져온다
    try {
        const exUser = await User.findOne({ where: { email } }); //find 한다.                
        if (exUser) { //exUser가 있는 경우
            req.flash('joinError', '이미 가입된 이메일입니다.');
            return res.redirect('/join');
        }
        const hash = await bcrypt.hash(password, 12); // 오래걸리니 await해준듯/
        // 암화화의 난의도 : 12번 꼬아서 만든다// 12~31 이하로 설정
        // 높으면 높을수록 암호화 강도는 높아지나 속도(성능) 저하
        await User.create({  //insert into
            email,  //email = email
            nick,  //nick = nick
            password: hash, 
        });
        return res.redirect('/'); //GET / 요청
    } catch(error) {
        console.error(error);
        return next(error);
    }
});
//로그인 안됬을때 사용하는 함수
router.post('/login', isNotLoggedIn,(req,res,next)=>{ //layout에서 로그인 submit하면 일로옴
    passport.authenticate('local', (authError, user, info) =>{//전략선택 'local' 
    //이친구는 미들웨어 역활을한다.
        //passport 모듈을 이용해서 로그인처리를 하는 곳
        if(authError){ //로그인 처리과정에서 오류가 발생
            console.error(authError);
            console.log(1);
            
            return next(authError);
        }
        if(!user){ // 유저 정보가 없는 경우
            req.flash('loginError', info.message);
            console.log(2);
            
            return res.redirect('/');
        }
        //이단계까지오면 로그인 전 처리 성공
        return req.login(user, (loginError)=>{ //문제없는 경우 return req.login콜백 날림
            if(loginError){
                console.log(3);
                
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/'); // 로그인 성공 메인화면으로 ㄱㄱ
        });
    })(req,res,next); //미들웨어 내의 미들웨어
});

router.get('/logout', isLoggedIn, (req,res)=>{ //로그아웃 후에는 할게 없으니 next()없음
    req.logout();  //logout()메서드는 req.user객체를 제거한다.
    req.session.destroy(); //session.destroy()는 req.session의 객체를 제거한다.
    res.redirect('/'); //다지웠으니 홈으로
});

module.exports = router;

