module.exports = (sequelize, DataTypes) => (
  sequelize.define('post', {
    content: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    timestamps: true, //createdAt, updatedAt, deletedAt }-> true하면 이게 다생김
    paranoid: true, //필드 자동생성, 값 자동입력??
  })
);
