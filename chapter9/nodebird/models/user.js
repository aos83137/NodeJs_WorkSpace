module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: true, //카카오 정책때문에 책의 false가 아닌 true썻다고함
      unique: true,
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false, //있어도 없어도 됨
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true, //있어야 됨
    },
    provider: { 
      type: DataTypes.STRING(10),
      allowNull: false, //
      defaultValue: 'local',  //local 이면 로그인을 한 것, kakao면 kaka오 로그인 한것
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  }, { //옵션
    timestamps: true, //createdAt, updatedAt, deletedAt }-> true하면 이게 다생김
    paranoid: true, //필드 자동생성, 값 자동입력??
  })
);
