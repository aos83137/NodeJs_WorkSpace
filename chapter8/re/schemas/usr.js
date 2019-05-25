const mongoose = require('mongoose');

const{ Schema }  = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        required: true, // 꼭입력해야한다네..
        unique:true,
    },
    age:{
        type: Number,
        required:true,
    },
    married:{
        type: Boolean,
        required:true,
    },
    comment:String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Usr', userSchema); //(이름, 스키마) 
//몽구스가 model메서드의 첫번째 인자의 내용을 컬렉션 이름으로 만듬
//Usr이면 usrs로 만들어짐
//자동완성이 맘에 안들면 3번째 인수를 넣어주자 이값이 db컬렉션이름이 될것ㅇ이다ㅏㅏㅏ