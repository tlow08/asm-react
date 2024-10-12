import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InProduct } from "../interface/Product";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/categories";
import { InCategory } from "../interface/Category";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product";

const Schema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string(),
  image: z.string(),
  category: z.string(),
});

type Props = {
  onSubmit: (values: InProduct) => void;
};

const ProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InProduct>({
    resolver: zodResolver(Schema),
  });

  const [categories, setCategories] = useState<InCategory[]>([]);
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      getDetailProduct(id)
        .then((response) => {
          reset(response.data);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [id, reset]);

  useEffect(() => {
    getAllCategories().then(({ data }) => {
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
  return (
    <>
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
    </>
  );
};

export default ProductForm;
