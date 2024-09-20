import Product from "../models/ProductModel.js";

export const getAllProducts = async (req, res, next)=>{
    try{
        const data = await Product.find().populate("category");
        if(data){
            return res.status(200).json({
                success: true,
                data,
                message: "Get all products successfully"
            });
        }
    }catch(error){
        next(error);
    }
};

export const getProductById = async (req, res, next)=>{
    try{
        const data = await Product.findById(req.params.id);
        if(data){
            return res.status(200).json({
                success: true,
                data,
                message: "Search product id successfully",
            });
        }
    }catch(error){
        next(error);
    }
}