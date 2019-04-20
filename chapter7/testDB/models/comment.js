module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'comment',// user테이블과 매핑
        {
            comment:{
                type:DataTypes.STRING(100),
                allowNull: false,
            },
            create_at:{
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue:DataTypes.NOW,
            },
        },
        {
            timestaps: false ,//책273
        }
    );
};