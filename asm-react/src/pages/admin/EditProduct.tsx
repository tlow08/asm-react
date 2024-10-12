import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InProduct } from "../../interface/Product";
import { getDetailProduct, updateProduct } from "../../services/product";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAllCategories } from "../../services/categories";
import { InCategory } from "../../interface/Category";

const Schema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string(),
  image: z.string(),
  category: z.string(),
});

const EditProduct = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InProduct>({
    resolver: zodResolver(Schema),
  });

  useEffect(() => {
    if (!id) return;
    getDetailProduct(id).then((response) => {
      reset(response.data.data);
    });
  }, [id, reset]);

  const nav = useNavigate();
  const onSubmit = (values: InProduct) => {
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
  const [categories, setCategories] = useState<InCategory[]>([]);

  useEffect(() => {
    getAllCategories()
      .then(({ data }) => {
        if (Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          toast.error("loi category");
          setCategories([]);
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  });
  return (
    <div>
      <h1>Edit product</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            type="text"
            id=""
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            type="text"
            id=""
            className="form-control"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="label">
            Price
          </label>
          <input
            type="number"
            id=""
            className="form-control"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Link image
          </label>
          <input
            type="text"
            id=""
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <select
            id=""
            className="form-control"
            {...register("category", { required: true })}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
