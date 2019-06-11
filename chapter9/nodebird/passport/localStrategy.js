const LocalStrategy =require('passport-local').Strategy;
const bcrypt =require('bcrypt');

const{User} = require('../models');

module.exports = (passport) =>{ 
    //
    passport.use(new LocalStrategy({
        usernameField: 'email', //layout.pug 에서 name='email'
        passwordField: 'password',//, name='password'에서 가져오는 값
        //pug파일의 name이 username이라면 default로 실행 되어 이  위치의 json이 필요없다
    }, async(email, password, done)=>{
        try{
            const exUser = await User.findOne({where:{email}});
            console.log(exUser);

            if(exUser){//패스워드 비교
                const result = await bcrypt.compare(password, exUser.password); //비교하네 bolean인듯
                if(result){
                    done(null,exUser);
                }else{
                    done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
                }
            }else{ //비가입 회원 처리
                done(null, false, {message: '가입되지 않은 회원입니다.'});
            }
        }catch(error){
            console.error(error);
            done(error);// done : passport.authenticate의 콜백함수
        }
    }));
}; 