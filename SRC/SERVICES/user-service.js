const UserRepository = require('../REPOSITORY/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');

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

    async signIn(email, plainPassword) {
        try {
            // step 1-> fetch the user using the email
            const user = await this.userrepository.getByEmail(email);
            // step 2-> compare incoming plain password with stores encrypted password
            const passwordsMatch = this.checkPassword(plainPassword, user.password);

            if(!passwordsMatch) {
                console.log("Password doesn't match");
                throw {error: 'Incorrect password'};
            }
            // step 3-> if passwords match then create a token and send it to the user
            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
        } catch (error) {
            console.log("Something went wrong in the sign in process");
            throw error;
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

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }


}

module.exports = userService;
