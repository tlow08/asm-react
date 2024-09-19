import slugify from "slugify";
import Category from "../models/CategoryModel.js";

export const getAllCategories = async (req, res, next) =>{
    try{
        const data = await Category.find();
        if(data){
            return res.status(200).json({
                success: true,
                data, 
                message: "Get all categories successfully!", 
            })
        }
    }catch(error){
        next(error);
    }
}

export const createCategory = async (req, res, next) => {
    try{
        const slug = slugify(req.body.title, {
            replacement: "-",
            lower: true,
            strict: true,
            locale: "vi",
            trim: true,
        });
        console.log(slug);
        const data = await Category.create({...req.body, slug});
        if(data){
            return res.status(201).json({
                success: true,
                data,
                message: "create successfully!",
            })
        }
    }catch(error){
        next(error);
    }
}