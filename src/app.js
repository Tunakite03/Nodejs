const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

// init middlewares
app.use(morgan("dev"))
// combined, short, tiny
app.use(helmet())
app.use(compression())


// init db
require('./dbs/init.mongodb.js')
const { countConnect, checkOverLoad } = require("./helpers/check.connect.js")
checkOverLoad();
// init routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome to alibaba"
    })
})


// handling errors


module.exports = app