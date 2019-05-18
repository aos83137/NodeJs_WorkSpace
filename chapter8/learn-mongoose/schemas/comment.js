const mongoose =require('mongoose');

const {Schema } = mongoose;
const {Types: {ObjectId}} = Schema;
//상수 ObjectId를 초기화해서 사용가능케 함
// Schema.Types.ObjectId

const commentSchema = new Schema({
    commenter:{
        type:ObjectId,
        required:true,
        ref: 'User',
    },
    comment:{
        type: String,
        required:true,
    },
    createAt:{
        type:Date,
        default: Date.now, 
    },
});
// const userSchema = new mongoose.Schema(); // 도 가능

module.exports = mongoose.model(
    'Comment', // 소스코드상에서 사용될 모델이름
    commentSchema // 실제 매칭되는 모델 객체
);