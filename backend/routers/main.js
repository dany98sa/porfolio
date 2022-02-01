const mainRoute = require('express').Router()
const project = require('./project')

mainRoute.use('/projects', project)

module.exports  = mainRoute