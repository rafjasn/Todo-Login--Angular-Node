const Sequelize = require("sequelize");
const db = require("../db.js");
module.exports = db.sequelize.define(
  "todos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    task: {
      type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
);