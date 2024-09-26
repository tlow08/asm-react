import { api } from "../config/axios";
import { InUser } from "../interface/User";

export const registerUser = (data: InUser)=>{
    return api.post("/api/auth/register", data);
}
export const loginUser = (data: InUser)=>{
    return api.post("/api/auth/login", data);
}

