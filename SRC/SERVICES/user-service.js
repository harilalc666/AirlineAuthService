const UserRepository = require('../REPOSITORY/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

class userService{

    constructor(){
        this.userrepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userrepository.create(data)
            return user;    
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw{ error };
        }
        
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

}

module.exports = userService;