const express = require('express');
const routes= express.Router();
const OngController = require('./controllers/ongControllers');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.get("/ongs",OngController.index);

routes.post("/ongs",OngController.create);
routes.get("/incidents",incidentController.index);
routes.get("/profile",ProfileController.index);
routes.post("/incidents",incidentController.create);
routes.delete("/incidents/:id",incidentController.delete);
routes.post("/sessions",SessionController.create);


module.exports = routes;

