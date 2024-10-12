import { api } from "../config/axios";

export const getAllCategories = () => {
  return api.get("/api/categories");
};