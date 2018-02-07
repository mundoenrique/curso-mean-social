'use strict';

const config = require('config'),
			mongoose = require('mongoose'),
			app = require('./app');

var port = process.env.PORT ? process.env.PORT : config.get('port');

//Conetar base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social')
				.then(() => {
					console.log('Conexión a la base datos exitosa');

					//crear servidor
					app.listen(port, () => {
						console.log("La aplicación nodeJs esta corriendo en el puerto: " + port)
					})
				})
				.catch(err => console.log(err));
