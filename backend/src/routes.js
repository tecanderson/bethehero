const express = require('express');
const routes= express.Router();
const OngController = require('./controllers/ongControllers');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const {celebrate,Joi,Segments}  = require('celebrate');


routes.get("/ongs",OngController.index);

routes.post("/ongs",celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)
    })
}),OngController.create);

routes.get("/incidents",celebrate({
    [Segments.QUERY]:Joi.object({
        page:Joi.number(),
    })
}),incidentController.index);
routes.get("/profile",celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
}),ProfileController.index);
routes.post("/incidents",incidentController.create);
routes.delete("/incidents/:id",celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required()

    })
}),incidentController.delete);
routes.post("/sessions",SessionController.create);


module.exports = routes;

