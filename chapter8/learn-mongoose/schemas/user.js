const mongoose =require('mongoose');

const {Schema } = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
        required: true, // 빈칸 허용안하는것 트루
        unique:true // 유일값이다 트루
    },
    age:{
        type: Number,
        required:true,
    },
    married:{
        type: Boolean,
        required: true,
    },
    comment: String, //입력값 없을 수도 있으니 required:true안함
    createAt:{
        type:Date,
        default: Date.now, 
    },
});
// const userSchema = new mongoose.Schema(); // 도 가능

module.exports = mongoose.model(
    'User', // 소스코드상에서 사용될 모델이름
    userSchema // 실제 매칭되는 모델 객체
);