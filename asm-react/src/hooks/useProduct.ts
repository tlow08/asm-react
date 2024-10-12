import { useForm } from "react-hook-form";
import { z } from "zod";
import { InProduct } from "../interface/Product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
} from "../services/product";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { InCategory } from "../interface/Category";
import { getAllCategories } from "../services/categories";

const Schema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string(),
  image: z.string(),
  category: z.string(),
});

export const useProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InProduct>({
    resolver: zodResolver(Schema),
  });
  const nav = useNavigate();
  
  const handleAddProduct = (values: InProduct) => {
    addProduct(values)
      .then(() => {
        toast.success("Add product successfully!");
        nav("/admin/products");
      })
      .catch((error) => {
        toast.error("Error" + error.message);
        console.log(error.message);
      });
  };
  const [categories, setCategories] = useState<InCategory[]>([]);

  useEffect(() => {
    getAllCategories()
      .then(({ data }) => {
        if (Array.isArray(data.data)) {
          setCategories(data.data);
          // toast.success("Successfully!");
        } else {
          toast.error("loi category");
          setCategories([]);
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  });

  const [products, setProducts] = useState<InProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        // console.log("API response:", data);
        if (Array.isArray(data.data)) {
          setProducts(data.data);
          toast.success("Successfully!");
        } else {
          toast.error("Data is not an array");
          setProducts([]);
        }
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: string | number) => {
    if (confirm("delete product?")) {
      deleteProduct(id)
        .then(() => {
          setProducts(products.filter((product) => product._id !== id));
          toast.success("Product delete successfully!");
        })
        .catch((error) => {
          toast.error("Error: " + error.message);
        });
    }
  };

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getDetailProduct(id).then((response) => {
      reset(response.data.data);
    });
  }, [id, reset]);
  const handleUpdateProduct = (values: InProduct) => {
    if (!id) return;
    updateProduct(id, values)
      .then(() => {
        toast.success("update product successfully!");
        nav("/admin/products");
      })
      .catch((error) => {
        toast.error("Error" + error.message);
        console.log(error.message);
      });
  };
  return {
    register,
    handleSubmit,
    errors,
    handleAddProduct,
    categories,
    loading,
    handleDelete,
    products,
    handleUpdateProduct,
  };
};
