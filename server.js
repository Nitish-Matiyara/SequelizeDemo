const Sequelize = require("sequelize");

const sequelize = new Sequelize("library_db", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate().then(()=>{
    console.log('Sequelize connection to database successfull.');
}).catch((error)=>{
    console.error('Unable to connect to the database: ', error);
})

module.exports = sequelize;