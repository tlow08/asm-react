import { verifyToken } from "../utils/jwt.js";
import User from '../models/UserModel.js';

export const checkAuth = async (req, res, next) =>{
    try{
        const token = req.headers?.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message: "Unauthorized",
            })
        }
        const decode = verifyToken(token);
        if(!decode){
            return res.status(401).json({
                message: "Token invalid or token expired",
            });
        }

        const user = await User.findById(decode._id);
        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }
        req.user = user;
        if(user.role !== "admin" && user.role !== "member"){
            return res.status(401).json({
                message: "Unauthorized",
            })
        }
        next();
    }catch(error){
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
}