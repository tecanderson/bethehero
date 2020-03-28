const express = require('express');
const routes= express.Router();
const OngController = require('./controllers/ongControllers');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');


routes.get("/ongs",OngController.index);

routes.post("/ongs",OngController.create);
routes.get("/incidents",incidentController.index);
routes.get("/profile",profileController.index);
routes.post("/incidents",incidentController.create);
routes.delete("/incidents/:id",incidentController.delete);
routes.post("/sessions",SessionController.create);


module.exports = routes;

