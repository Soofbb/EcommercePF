import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const Zapatilla = sequelize.define('zapatilla', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  url_imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true, // Corrido: debe ser true en lugar de null
  },
  talle: {
    type: DataTypes.INTEGER,
    allowNull: true, // Corrido: debe ser true en lugar de null
  },
}, {
  tableName: 'zapatillas', // Nombre de la tabla
  timestamps: false, // Deshabilita los campos createdAt y updatedAt
});

export default Zapatilla;
