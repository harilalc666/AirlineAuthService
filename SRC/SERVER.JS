const express = require('express');
const { PORT } = require('./config/serverConfig');
const app = express();



const ServerStartup = () => {

    app.listen(PORT, () => {
        console.log(`server started on Port: ${PORT}`);
    })

}

ServerStartup();