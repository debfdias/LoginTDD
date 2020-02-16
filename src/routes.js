const routes = require('express').Router();
const { User } = require('./models');
const SessionController = require('./controllers/SessionController');

/*
User.create({
	name: "Debs",
	email: "debs@gmail.com",
	password: "4564654656"
});*/

routes.post("/sessions", SessionController.store); 


module.exports = routes;