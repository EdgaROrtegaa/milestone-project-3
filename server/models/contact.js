'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    
    /** 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      Contact.belongsTo(User)
    }
  }
  Contact.init({
   // id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};