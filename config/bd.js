const Sequelize = require('sequelize');

// exportar una instancia de Sequelize con la conexión a nuetsra BD.

module.exports = new Sequelize('', '', '', {
    host: 'localhost',
    dialect: 'mysql',
    });