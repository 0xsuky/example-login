const { Sequelize, Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        userid: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        userpw: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
      }
    );
  }

  static associate(db) {}
}

module.exports = User;
