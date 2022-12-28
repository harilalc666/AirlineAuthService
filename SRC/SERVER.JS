const express = require('express');
const { PORT } = require('./config/serverConfig');
const app = express();
const apiroutes = require('./ROUTES/index');
const bodyParser = require('body-parser');

const ServerStartup = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiroutes);

    app.listen(PORT, () => {
        console.log(`server started on Port: ${PORT}`);
    })

}

ServerStartup();