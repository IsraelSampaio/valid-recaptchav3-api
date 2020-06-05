import {Request, Response} from 'express';

import http from 'axios';

class RecaptchaController{
    public async validate(request: Request, response: Response){
        const { token } = request.body.recaptcha;

        const dataRecaptcha = await http.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${token}`
          );

        if(dataRecaptcha.data.success){
            return response.json({
                code: 0,
                type: "success",
                message: "Recaptcha verificado com sucesso",
                data: dataRecaptcha.data
            });
        }else {
            return response.status(400)
                .json({
                    code: -1,
                    type: "error",
                    message: "Validação do recaptcha falhou",
                    url_error_codes: 'https://developers.google.com/recaptcha/docs/verify#error_code_reference',
                    'error-codes': dataRecaptcha.data['error-codes'],
                })
        }
    }
};

export default new RecaptchaController();