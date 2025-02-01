const express = require('express')
const db = require('./config/db_config')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/view_engine')
const webRoutes = require('./routes/web')
//console.log(`${process.env.PORT} & ${process.env.HOST_NAME}`);


const app = express() //express app
const port = process.env.PORT || 6969
const host_name = process.env.HOST_NAME


//config template, static file, ....
configViewEngine(app)
//middleware have to be defined before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use('/test', webRoutes) //adding a route to classify in the future (difference version for ex)



//run server on defined port
app.listen(port, () => {
    console.log(`Server running on http://${host_name}:${port}/test`);

})