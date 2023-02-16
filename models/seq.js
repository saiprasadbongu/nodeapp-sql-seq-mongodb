const dbConfig = require('../connections/mysqldb.js');


const {Sequelize, DataTypes} = require('sequelize');


const path = 'mysql://root:password@localhost:3306/empdetails';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


// 1 to Many Relation

db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
})

db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
})

module.exports = db