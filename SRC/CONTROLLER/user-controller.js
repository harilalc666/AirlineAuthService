const userService = require('../SERVICES/user-service');

const userservice = new userService();

const create = async (req,res) => {
    try {
        const user = await userservice.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            data: user,
            error: {},
            message: 'Succesfully User is created'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            err : error,
            message: "not able to create user"
        })
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userservice.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
    signIn
}