import { useParams } from "react-router-dom";
import { InProduct } from "../interface/Product";
import { useEffect, useState } from "react";
import { getDetailProduct } from "../services/product";
import toast from "react-hot-toast";
import { addToCart } from "../services/cart";
import { useCart } from "../context/CartContext";

export const useDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState<InProduct>();
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  const { setCartItems } = useCart();

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
    //   console.log(product._id, quantity);
    addToCart(product._id, quantity)
      .then(() => {
        toast.success("Thêm sản phẩm thành công!");
        //   location.reload();
        setCartItems((prevItems) => {
            console.log(prevItems);
          const existingItems = prevItems.find(
            (item) => item.product._id === product._id
          );
          if (existingItems) {
            return prevItems.map((item) => 
              item.product._id === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            return [...prevItems, { product, quantity }];
          }
        });
      })
      .catch((error) => {
        toast.error("Error: " + error.response.data.message);
      });
  };

  return {
    handleAddCart,
    loading,
    setQuantity,
    product,
    quantity,
  };
};
