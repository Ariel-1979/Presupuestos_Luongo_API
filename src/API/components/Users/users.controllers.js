import dto from './users.dto.js';

const getAllUsers = async (req, res) => {
    try {
        console.log('getAllUsers');
        const { statusCode, data } = await dto.getAllUsers();
        console.log(data);
        res.status(statusCode).json(data);
    } catch (error) {
        return error;
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const { statusCode, data } = await dto.login(email, password);
    console.log(data);
    res.status(statusCode).json(data);
};

export default {
    getAllUsers,
    login,
};
