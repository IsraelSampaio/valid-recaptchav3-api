import express from 'express';

/** Recaptcha Controller */
import RecaptchaController from './controllers/recaptchaController'

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message: 'API 1.0 - key validation recaptcha '})
});

routes.post('/v1/recaptcha', RecaptchaController.validate);

export default routes