module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('comment',{ //첫번쨰 인수 테이블이름
        comment: {
            type: DataTypes.STRING(100),
            allowNull : false,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW,
        },
    },{// 두번째는 속성
        timestamps:false, //created_at만들었으니 timestaps는 필요없음
    });//세번째는 테이블 옵션
};