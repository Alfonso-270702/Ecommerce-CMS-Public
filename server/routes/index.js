const route = require('express').Router()
const homeRoute = require('./homeRoute')
const productsRoute = require('./productsRoute')

route.use('/',homeRoute)
route.use('/products',productsRoute)

module.exports = route