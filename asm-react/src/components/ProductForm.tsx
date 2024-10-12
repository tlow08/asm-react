
import { useProduct } from "../hooks/useProduct";
import { InProduct } from "../interface/Product";


type Props = {
  onSubmit: (values: InProduct) => void;
};

const ProductForm = ({ onSubmit }: Props) => {

  const {handleSubmit, register, errors, categories} = useProduct()
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
