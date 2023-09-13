const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bookName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    merberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "merberId"
    }
  }, {
    sequelize,
    tableName: 'book',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "merberId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "merberId" },
        ]
      },
    ]
  });
};
