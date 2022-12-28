const express = require('express');
const { PORT } = require('./config/serverConfig');
const app = express();
const apiroutes = require('./ROUTES/index');
const bodyParser = require('body-parser');
// const userService = require('./SERVICES/user-service');
// const { User } = require('./MODELS/index');

const ServerStartup = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiroutes);

    app.listen(PORT, () => {

        console.log(`server started on Port: ${PORT}`);

        // const service = new userService();
        // const newtoken = service.createToken({email:"agent@admin.com",id:5,});
        // console.log(newtoken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFnZW50QGFkbWluLmNvbSIsImlkIjo1LCJpYXQiOjE2NzIyNDMwNzQsImV4cCI6MTY3MjMyOTQ3NH0.QKFubUHsyIqjUMo55iJkjqFt3ULzku7fp3PgPXQgFMo';
        // const verifytoken = service.verifyToken(token)
        // console.log(verifytoken);
    })

}

ServerStartup();