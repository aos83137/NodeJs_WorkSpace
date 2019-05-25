const mongoose = require('mongoose');

const{Schema} = mongoose;
const{Types:{ObjectId}} = Schema;
const commentSchema = new Schema({
    commenter:{
        type: ObjectId,
        required: true,
        ref: 'Usr', // User 참조?에러나면 확인할 부분 Usrs로 해보기
    },
    comment: {
        type: String,
        required: true,
    },
    createdAT:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Cmnt', commentSchema);