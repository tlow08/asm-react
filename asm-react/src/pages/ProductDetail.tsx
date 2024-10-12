import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InProduct } from "../interface/Product";
import { getDetailProduct } from "../services/product";
import toast from "react-hot-toast";
import { addToCart } from "../services/cart";

const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState<InProduct>();
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    if (!id) return;
    getDetailProduct(id)
      .then(({ data }) => {
        toast.success("Successfully");
        setProduct(data.data);
      })
      .catch((error) => toast.error("error" + error.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddCart = () => {
    if (!product?._id) return;
    console.log(product._id, quantity);
    addToCart(product._id, quantity)
      .then(() => {
        toast.success("Thêm sản phẩm thành công!");
        location.reload();
      })
      .catch((error) => {
        toast.error("Error: " + error.response.data.message);
      });
  };
  return (
    <>
      <section className="max-w-screen-2xl m-auto pt-8 ">
        {loading && <p>loading</p>}
        {product && (
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <img src={product.image} className="w-full" alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{product.title}</h2>
              <div className="flex gap-4 items-center my-2">
                <div className="flex text-xl gap-2 text-yellow-400">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <div className="text-base font-medium">
                  <p>200 luot mua</p>
                </div>
                <div className="text-base font-medium">
                  <p>200 luot danh gia</p>
                </div>
              </div>
              <h3 className="text-red-500 text-2xl font-medium my-2">
                {product.price}$
              </h3>
              <div className="grid grid-cols-1 gap-2 text-base font-medium">
                <p>Color:</p>
                <p>Size:</p>
              </div>
              <p className="text-base my-2">{product.description}</p>
              <div className="grid grid-cols-1 gap-2 max-w-[200px]">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border p-2"
                />
                <button onClick={handleAddCart} className="btn btn-warning">
                  Thêm vào giỏ hàng
                </button>
                <button className="btn btn-danger">Mua</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProductDetail;
