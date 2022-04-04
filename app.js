'use strict';

let express = require('express');
let app = express();
let server = require("http").createServer(app);

app.use("/assets", express.static('public'))

require("dotenv").config({path: "./config/.env"});

let ejs = require('express-ejs-layouts');
app.set('view engine', "ejs");
app.use(ejs);

let appRoutes = require('./src/routes/app.routes.js');
app.use('/', appRoutes)

server.listen(process.env.PORT, () => {
    console.log("Listening on : " + process.env.PORT);
});