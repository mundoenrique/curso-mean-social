'use strict'
const express = require('express'),
			bodyParser = require('body-parser');

var app = express();

//cargar rutas

//cargar middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors

//rutas
app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Servidor Activo'
	})
})

//exportar
module.exports = app;
