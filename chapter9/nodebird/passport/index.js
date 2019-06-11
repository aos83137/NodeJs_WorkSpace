const local = require('./localStrategy'); // 현재 폴더 index.js파일이 잇는 폴더에 localStrategy.js 작성
// const kakao = require('./kakaoStrategy'); // const kakao =require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {//passport - app.js의 passport모듈의 객체
  passport.serializeUser((user, done) => { //req.login()호출하면 호출됨
    //user - 저장하려는 사용자 정보객체
    //done - 완료시 호출되는 콜백함수
    done(null, user.id);
    // 인증이 완료되면 세션정보에 user.id 저장하기 위해 호출
  });

  passport.deserializeUser((id, done) => { 
    //로그인 후 모든 요청에 대해 실행
    //req.user객체에 저장되기 때문에 사용하면 됨 
    //passport.session()에서 호출해주는 함수
    User.findOne({ // User.find 는 promise임
      where: { id },
      // include: [{
      //   model: User,
      //   attributes: ['id', 'nick'],
      //   as: 'Followers',
      // }, {
      //   model: User,
      //   attributes: ['id', 'nick'],
      //   as: 'Followings',
      // }],
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport); // 로그인 처리를 위한 passport 전략설정
  // kakao(passport);
};
