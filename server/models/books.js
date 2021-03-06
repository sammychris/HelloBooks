
export default (sequelize, DataTypes) => {
  const books = sequelize.define('book', {
    Tittle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:
            {
              notEmpty: true,
              len: [3, 30]
            }
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:
            {
              notEmpty: true,
              len: [3, 30]
            }
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:
            {
              notEmpty: true,
              len: [3, 30]
            }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:
            {
              notEmpty: true,
              len: [10, 500]
            }
    },
  }, {
    classMethods: {
        associate: (models) => { // eslint-disable-line
        // associations can be defined here
      }
    }
  });
  return books;
};
