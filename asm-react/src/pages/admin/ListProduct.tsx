
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

const ListProduct = () => {
  const {loading, products, handleDelete} = useProduct()
  return (
    <>
      {loading && <p>Loading</p>}
      <Link to={"/admin/products/add"} className="btn btn-info">
        Add product
      </Link>
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
              <td>
                <img src={item.image} alt="" className="w-[50px]" />
              </td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link
                  to={`/admin/products/edit/${item._id}`}
                  className="btn btn-warning"
                >
                  {" "}
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListProduct;
