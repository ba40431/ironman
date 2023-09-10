'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class booktest extends Model {
      static associate(models) {
        // define association
      }
    }
    booktest.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        bookName: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      {
        sequelize,
        modelName: 'booktest',
        tableName: 'booktest',
        freezeTableName: true,
        timestamps: false
      }
    )
    return booktest
  }