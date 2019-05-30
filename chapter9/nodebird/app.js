const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config(); // .env파일 내용을 읽어서 
// process.env라는 객체에 설정한다.
// process.env.COOKIE_SECRET 이 됨

const pageRouter = require('./routes/page');
const {sequelize} = require('./models'); //db.sequelize 객체임

const app = express();
sequelize.sync();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);

app.use(morgan('dev')); // 개발자 번호로 loging하는 것
app.use(express.static(path.join(__dirname, 'public'))); //public폴더 path 설정
app.use(express.json()); // express 에서 json 사용할 거니까 ㅇㅇ
app.use(express.urlencoded({
    extended: false
})); //urlencoded 안하겠다 이유는 나중에
app.use(cookieParser(process.env.COOKIE_SECRET)); // 
app.use(session({ // express-session 미들웨어를 사용하기 위해 app에 등록
    resave: false,
    saveUninitialized: false,
    //   secret: 'nodebirdsecret', //소스코드에 비번 작성은 바람직하지않다 =>사표각임(하드코딩임) 하면안됨
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(flash()); // 메세지가 잠깐 나왔다 마는거 Toast같은것

app.use('/', pageRouter); // '/'면  pageRouter 하겠다. (0):브라우져에서 여기로 옴 (1)

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => { // 이게 중요 이게 실제로 서버를 대기 시켜주는것임 위에 port라는 키값 설정 했음 8001로
            console.log(app.get('port'), '번 포트에서 대기중, http://127.0.0.1:8001');
            });
