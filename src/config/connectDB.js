import '#Config/env.js';
import mysql from 'mysql2';
import util from 'util';


const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log('Error de conexión a la Base de Datos');
    }
    connection.release();
    console.log('Conexión a Base de Datos - Exitosa');
});

pool.query = util.promisify(pool.query);

export default pool;
