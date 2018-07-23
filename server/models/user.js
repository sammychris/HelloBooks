
export default (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: { type: DataTypes.STRING, allowNull: false, },
    username: { type: DataTypes.STRING, allowNull: false, },
    password: { type: DataTypes.STRING, allowNull: false, },
    membership: { type: DataTypes.STRING, allowNull: false, },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
    });
  return user;
};
