const Sequelize = require('sequelize');

const path = 'mysql://root:password@localhost:3306/empdetails';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
  
  console.log('Connection established successfully.');

}).catch(err => {

  console.error('Unable to connect to the database:', err);

}).finally(() => {

  sequelize.close();

});


module.exports=sequelize