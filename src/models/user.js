'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordH: DataTypes.VIRTUAL,
    password: DataTypes.STRING,
    createdAt: {
         field: 'created_at',
         type: DataTypes.DATE,
     },
     updatedAt: {
         field: 'updated_at',
         type: DataTypes.DATE,
     } 
  },
  {
    hooks: {
      beforeSave: async user => {
        if (user.passwordH){
          user.password = await bcrypt.hash(user.passwordH, 8);
        }
      }
    }
  });

  User.prototype.checkPassword = function(passwordH) {
    return bcrypt.compare(passwordH, this.password);
  };

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};