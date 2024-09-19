import Joi from "joi";

export const categorySchema = Joi.object({
    title: Joi.string().required().min(6).max(255).messages({
        "string.base": "Title must be a string",
        "string.empty": "Title cannot be empty",
        "string.min": "Title must have at least 6 characters",
        "string.max": "Title must have at most 255 characters",
    }),

    description: Joi.string().message({
        "string.base": "Description must be a string",
    })
})