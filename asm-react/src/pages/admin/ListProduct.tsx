import { useEffect, useState } from "react";
import { Product } from "../../interface/ProductIn";
import { deleteProduct, getAllProduct } from "../../services/product";
import toast from "react-hot-toast";

const ListProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
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

  const handleDelete = (id: string|number )=>{
    if(confirm("delete product?")){
        deleteProduct(id)
        .then(()=>{
            setProducts(products.filter((product)=> product._id !== id));
            toast.success("Product delete successfully!");
        })
        .catch((error)=>{
            toast.error("Error: " + error.message);
        })
    }
  }
  return (
    <>
      {loading && <p>Loading</p>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td><img src={item.image} alt="" className="w-[50px]" /></td>
              <td>{item.price}</td>
              <td>
                <button onClick={()=> handleDelete(item._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListProduct;
