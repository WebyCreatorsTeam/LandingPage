const Joi = require("joi");

exports.userValidation = Joi.object({
    userName: Joi.string().min(2).required().messages({
        "string.empty": "השם לא יכול להיות ריק",
        "string.min": "השם צריך להיות לפחות 2 תווים",
    }),
    userEmail: Joi.string().email().messages({
        "string.email": "אימייל לא תקין",
        "string.empty": "אימייל לא יכול להיות ריק",
    }),
    userPhone: Joi.string()
        .required()
        .min(10)
        .pattern(
            new RegExp(
                /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/
            )
        )
        .messages({
            "string.min": "מספר טלפון חייב להיות מינימום 10 תווים",
            "string.pattern.base": "נא להכניס מספר טלפון תקין",
            "string.empty": "מספר טלפון לא יכול להיות ריק",
        }),
    userHelp: Joi.string().required().messages({
        "string.empty": "נא לבחור במה אנחנו יכולים לעזור",
    }),
});
