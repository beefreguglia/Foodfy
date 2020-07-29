const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')
const receitas = require('./data')
const { urlencoded } = require('express')

//Declarando Servidor Express
const server = express()

//Middlewares
server.use(urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

//Configurando a view Engine
server.set("view engine", "njk")

nunjucks.configure("views", {

    express: server,
    autoescape:false,
    noCache: true

})

server.listen(5000, function(){

    console.log('Server is running')

})

//netstat -putan | grep $porta para achar o processo utilizando a porta