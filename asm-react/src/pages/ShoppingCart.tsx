import { useEffect, useState } from "react";
import { getCart, updateCartProduct, removeFromCart } from "../services/cart";
import toast from "react-hot-toast";

// Define the Product and CartItem interfaces
interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCart = () => {
      getCart()
        .then((response) => {
          setCartItems(response.data.data.products);
        })
        .catch((error) => {
          toast.error("Failed to fetch cart items: " + error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return; // Prevent setting quantity below 1
    updateCartProduct(productId, quantity)
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.product._id === productId ? { ...item, quantity } : item
          )
        );
        toast.success("Sản phẩm đã bị xóa khỏi giỏ hàng!");
        location.reload();
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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-2xl m-auto h-lvh">
      <table className="table mt-16">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.product._id}>
              <td>{index + 1}</td>
              <td>{item.product.title}</td>
              <td>
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16"
                />
              </td>
              <td>{item.product.price}$</td>
              <td>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.product._id, item.quantity + 1)
                    }
                    className="btn btn-info"
                  >
                    +
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(
                        item.product._id,
                        Number(e.target.value)
                      )
                    }
                    className="mx-2 border w-[50px] h-[40px]"
                  />
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      handleQuantityChange(item.product._id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item.product._id)}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
