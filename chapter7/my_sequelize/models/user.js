module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('user',{ //첫번쨰 인수 테이블이름
        name: {
            type: DataTypes.STRING(20),
            allowNull : false,
            unique : true,
        },
        age: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        married:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
        comment:{
            type:DataTypes.TEXT,
            allowNull:true,
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