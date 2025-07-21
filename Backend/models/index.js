const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.json').development;
const sequelize = new Sequelize(config);

const db = {};

const basename = path.basename(__filename);

fs.readdirSync(__dirname).filter( file => {
    return (
        file.indexOf('.') !== 0 && 
        file !== basename &&
        file !== 'index.js' &&
        file.slice(-3) === '.js'
    );
})
.forEach( file => {
    const filePath = path.join(__dirname, file);
    const modelFactory = require(filePath); //Error: возможно будет ошибка (TypeError: require(...) is not a function)
    const modelName = path.basename(file, '.js');

    let model;
    if (typeof modelFactory === 'function') {
        model = modelFactory(sequelize, Sequelize.DataTypes);
    }
    else {
        model = sequelize.define(modelName, modelFactory.attributes, modelFactory.options);
    }

    db[modelName] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
