const { DataTypes } = require("sequelize");
module.exports=(sequelize,Sequelize) =>
{
const Jucator= sequelize.define("jucator",
    {
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
           
        }
    });
    return Jucator;
};