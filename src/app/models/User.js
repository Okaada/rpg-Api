const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                Id: {
                    type: Sequelize.DataTypes.UUID,
                    primaryKey: true
                },
                Name: Sequelize.STRING,
                Email: Sequelize.STRING,
                Password: Sequelize.STRING
            },
            {
                sequelize
            }
        );
        return this
    }

    //associate
}

module.exports = User;