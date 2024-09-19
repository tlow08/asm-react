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