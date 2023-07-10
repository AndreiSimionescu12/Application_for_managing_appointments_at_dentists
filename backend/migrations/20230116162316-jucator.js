'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("jucators",{
    id:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      
 },
  nume:{
      type:Sequelize.STRING(100),
      allowNull:false,
      unique: true,
  },
  prenume:
  {
      type:Sequelize.STRING(100),
      allowNull:false,
      
  },
  pozitie:
  {
      type:Sequelize.STRING(100),
      allowNull:false,
      
  },
  salariu:
  {
      type:Sequelize.DECIMAL(12),
      allowNull:false,
     
  },
  createdAt:Sequelize.DATE,
  updatedAt:Sequelize.DATE
})
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('jucators');
  }
};
