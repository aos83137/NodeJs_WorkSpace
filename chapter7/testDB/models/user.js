module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'name',// user테이블과 매핑
        {
            name:{
                type:DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            age:{
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married:{
                type: DataTypes.INTEGER.BOOLEAN,
                allowNull: false,
            },
            comment:{
                type:DataTypes.TEXT,
                allowNull: true,
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