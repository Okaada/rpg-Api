const Sequelize = require('sequelize').Sequelize;

const User = require('../models/User');

const databaseConfig = require('../../config/database');

const models = [User];

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connect = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connect))
            .map(model => model.associate && model.associate(this.connect))
    }
}

module.exports = new Database();