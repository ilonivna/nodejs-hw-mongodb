import Joi from "joi";

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
    }),
    phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Phone Number should have at least {#limit} characters',
    'string.max': 'Phone Number should have at most {#limit} characters',
    'any.required': 'Phone Number is required',
    }),
    email: Joi.string().email(),
    isFavorite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal'),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(30).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    }),
    phoneNumber: Joi.string().min(3).max(20).messages({
    'string.min': 'Phone Number should have at least {#limit} characters',
    'string.max': 'Phone Number should have at most {#limit} characters',
    }),
    email: Joi.string().email(),
    isFavorite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal'),
});
