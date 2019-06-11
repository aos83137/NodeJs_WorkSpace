exports.isLoggedIn = (req,res,next) =>{
    if(req.isAuthenticated()){
        // isAuthenticated()는 passport모듈이 만들어 줌
        //로그인 중이면 true, 그렇지 않으면 false
        next(); 
    }else{
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn =(req,res,next) =>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.redirect('/'); //('/')로 간다 // GET /요청
    }
};   