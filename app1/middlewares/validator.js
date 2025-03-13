const Joi = require('joi');

exports.signupSchema = Joi.object({
    email:Joi.string().min(6).required().email({
        tlds:{allow:['com','net']}
    }),
    password:Joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?.*d).{8,}$')),
})


