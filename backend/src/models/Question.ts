import { DataTypes, Sequelize } from "sequelize";
module.exports = (sequelize: Sequelize):  => {

  sequelize.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
