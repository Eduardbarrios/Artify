const pool = require('../Models/db');

// Function to retrieve all files from the database
const getAllFiles = async (req, res) => {
  try {
    const query = 'SELECT * FROM products';
    // Execute the query using the pool object's query method
    const result = await pool.query(query);

    // Send the result as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los archivos:', error);
    // Handle the error by sending a 500 status code and an error message as a JSON response
    res.status(500).json({ error: 'Error al obtener los archivos' });
  }
};

module.exports = {
  getAllFiles,
};
