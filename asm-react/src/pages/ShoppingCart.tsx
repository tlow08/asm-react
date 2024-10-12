import { useShopCart } from "../hooks/useShoppCart";

const ShoppingCart: React.FC = () => {
  const { loading, cartItems, totalPrice, handleQuantityChange, handleDelete } =
    useShopCart();
  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-2xl m-auto h-lvh  gap-8 p-6  ">
      <table className=" table mt-8">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th></th>
            <th></th>
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
                      handleQuantityChange(
                        item.product._id as string,
                        item.quantity + 1
                      )
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
                        item.product._id as string,
                        Number(e.target.value)
                      )
                    }
                    className="mx-2 border w-[50px] h-[40px]"
                  />
                  <button
                    className="btn btn-info"
                    onClick={() =>
                      handleQuantityChange(
                        item.product._id as string,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item.product._id as string)}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </td>
              <td>
                <div className="flex items-center justify-between gap-2 text-base font-semibold">
                  <p>{item.product.price}$</p>
                  <p>X</p>
                  <p>{item.quantity}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" w-full flex justify-end items-center gap-2 mt-4">
        <p className="text-[19px] font-semibold">
          Tổng tiền: <span className="text-danger">{totalPrice} $</span>
        </p>{" "}
        <button className="btn btn-warning">Thanh toán</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
