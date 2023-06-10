const { Client } = require('pg');
require('dotenv').config();

// Create a new Client object from the pg module to manage database connections
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false // Configuración para permitir conexiones SSL no autorizadas en Azure
  }
});

// Connect to the database server
client.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Aquí puedes ejecutar tus consultas SQL o realizar operaciones en la base de datos
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });

module.exports = client;