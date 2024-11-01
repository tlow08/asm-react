import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateCartProduct } from "../services/cart";
// import { CartItem } from "../interface/Product";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const useShopCart = () => {
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const nav = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const { setCartItems, cartItems } = useCart();
  useEffect(() => {
    const fetchCart = () => {
      getCart()
        .then((response) => {
          setCartItems(response.data.data.products);
        })
        .catch((error) => {
          toast.error("Error " + error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchCart();
  }, [setCartItems]);

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return; // Prevent setting quantity below 1
    updateCartProduct(productId, quantity)
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.product._id === productId ? { ...item, quantity } : item
          )
        );
        toast.success("Quantity update successfully!");
        // location.reload();
      })
      .catch((error) => {
        toast.error("Error" + error.message);
      });
  };

  const handleDelete = (productId: string) => {
    if (window.confirm("Bạn muốn xóa?")) {
      removeFromCart(productId)
        .then(() => {
          setCartItems((prevItems) =>
            prevItems.filter((item) => item.product._id !== productId)
          );
          toast.success("Sản phẩm đã bị xóa khỏi giỏ hàng!");
          location.reload();
        })
        .catch((error) => {
          toast.error("Failed to remove product: " + error.message);
        });
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    handleDelete,
    handleQuantityChange,
    cartItems,
    loading,
    totalPrice,
    nav,
    clearCart,
  };
};
