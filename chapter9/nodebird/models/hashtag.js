module.exports = (sequelize, DataTypes) => (
  sequelize.define('hashtag', { //hashtags 테이블 생성
    title: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
  }, {
    timestamps: true, //createdAt, updatedAt, deletedAt }-> true하면 이게 다생김
    paranoid: true, //필드 자동생성, 값 자동입력??
  })
);
