const { User, Role } = require('../MODELS/index');

class UserRepository{

    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error };
        }
        
    }

    async destroy(userId){
        try {
            await User.destroy({
                where: {
                id: userId
            }
        })
            return true;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error }
        }
    }

    async getById(userId){
        try {
            const response = await User.findByPk(userId, {
                attributes: ['email', 'id']
            })

            return response;
        } catch (error) {
            console.log("Something went wrong in repository");
            throw{ error } 
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({where: {
                email: userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async isHR(userId) {
        try {
            const user = await User.findByPk(userId);
            const hrRole = await Role.findOne({
                where: {
                    name: 'HR'
                }
            });
            return user.hasRole(hrRole);
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async isAccounts(userId) {
        try {
            const user = await User.findByPk(userId);
            const accntRole = await Role.findOne({
                where: {
                    name: 'ACCOUNTS'
                }
            });
            return user.hasRole(accntRole);
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;