import { api } from "../config/axios";
import { InProduct } from "../interface/Product";

export const getAllProduct = () => {
  return api.get("/api/products");
};

export const getDetailProduct = (_id: number | string) => {
  return api.get(`/api/products/${_id}`);
};

export const deleteProduct = (id: string | number) => {
  return api.delete(`/api/products/${id}`);
};

export const addProduct = (data: InProduct) => {
  return api.post(`/api/products`, data);
};

export const updateProduct = (_id: string, data: InProduct) => {
  return api.patch(`/api/products/${_id}`, data);
};
