const express = require('express')

const jsend = require('jsend')
const mainRoute = require('./routers/main')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000


app.use(express.urlencoded())
app.use(express.json());
app.use(jsend.middleware)
app.use('/api/v1', mainRoute)

app.listen(port, () => console.log('> Server is up and running on port : ' + port))
