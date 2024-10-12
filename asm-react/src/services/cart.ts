import { api } from "../config/axios";


export const addToCart = (productId: string | number, quantity: number) => {
  return api.post("/api/carts", { productId, quantity });
};

export const getCart = async () => {
    return await api.get('/api/carts');
};

export const updateCartProduct = async (productId: string | number, quantity: number) => {
    return await api.post('/api/carts/update', { productId, quantity });
};

export const removeFromCart = async (productId: string | number) => {
    return await api.post('/api/carts/remove', { productId });
};