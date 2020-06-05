import {Request, Response} from 'express';

import http from 'axios';

class RecaptchaController{
    public async validate(request: Request, response: Response){
        const { token } = request.body.recaptcha;

        try{
            const dataRecaptcha = await http.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${token}`
              );
      
              return response.json({
                code: 0,
                type: "success",
                message: "Recaptcha verificado com sucesso",
                data: dataRecaptcha.data
              });
        }catch(err){
            return response.status(400)
                .json({
                    code: -1,
                    type: "error",
                    message: err.message,
                })
        }
    }
};

export default new RecaptchaController();