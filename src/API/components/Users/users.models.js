import pool from '#Config/connectDB.js';

const getAllUsers = async () => {
    try {
        const rows = pool.query(
            'SELECT id, nombre, apellido, email FROM users'
        );
        return rows;
    } catch (error) {
        return error;
    }
};

const login = (email, password) => {
    try {
        const rows = pool.query(
            `SELECT nombre, apellido FROM usuarios WHERE email = ${email} AND password = ${password}`
        );
        return rows;
    } catch (error) {
        return error;
    }
};

export default { getAllUsers, login };
