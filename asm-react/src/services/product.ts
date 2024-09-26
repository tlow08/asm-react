import { api } from "../config/axios";

export const getAllProduct = ()=>{
    return api.get("/api/products");
};

export const getDetailProduct = (_id: number | string) =>{
    return api.get(`/api/products/${_id}`);
}

export const deleteProduct = (id: string|number)=>{
    return api.delete(`/api/products/${id}`);
}