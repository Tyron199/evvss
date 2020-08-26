/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
    return sequelize.define('subscribers', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date_added: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted: {
        type: DataTypes.DATE,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      ip_address: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
      tableName: 'subscribers'
    });
  };
  