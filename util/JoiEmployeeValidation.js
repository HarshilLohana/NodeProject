const Joi = require('@hapi/joi')

const empSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    age: Joi.number().min(18).max(60),
    email: Joi.string().email().required(),
    password: Joi.string().min(2).required(),
}).strict()

module.exports = {
  empSchema,
}