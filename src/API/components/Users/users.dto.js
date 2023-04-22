import models from './users.models.js';

const getAllUsers = async () => {
    try {
        const rows = await models.getAllUsers();
        return { statusCode: 200, data: rows, message: 'OK' };
    } catch (error) {
        return { statusCode: 500, data: error, message: 'Error' };
    }
};

const login = async (email, password) => {
    const rows = await models.login(email, password);
    return { statusCode: 200, data: rows, message: 'OK' };
};

export default { getAllUsers, login };
