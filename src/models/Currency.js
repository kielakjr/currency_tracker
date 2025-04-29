import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Currency = sequelize.define('Currency', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING(3),
    allowNull: false,
    unique: true,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});
