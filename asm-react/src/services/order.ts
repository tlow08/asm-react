import { api } from "../config/axios";
import { InOrder } from "../interface/Order";

export const orderCreate = (data: InOrder) => {
  return api.post(`/api/orders/create`, data);
};

export const getAllOrder = () =>{
  return api.get<InOrder>( `/api/orders/getAll`);
}