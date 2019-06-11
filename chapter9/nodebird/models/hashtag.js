module.exports = (sequelize, DataTypes) => ( //화살표 함수 return 하나 뿐이면 return 생략 가능에 {}생략가능 p60 (add4) 참고
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
