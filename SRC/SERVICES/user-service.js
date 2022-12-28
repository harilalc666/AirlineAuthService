const UserRepository = require('../REPOSITORY/user-repository');

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

}

module.exports = userService;