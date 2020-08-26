export default function (sequelize, DataTypes) {
    return sequelize.define('campaigns', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
    }, {
        tableName: 'campaigns'
    });
}