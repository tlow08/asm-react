import { useEffect, useState } from "react";
import { InOrder } from "../../interface/Order";
import { getAllOrder } from "../../services/order";

const ListOrder = () => {
  const [orders, setOrders] = useState<InOrder[]>([]);

  useEffect(() => {
    getAllOrder()
    .then((response) => {
      const data: InOrder[] = Array.isArray(response.data) ? response.data : [response.data];
      setOrders(data);
    })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">List of Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">Payment form</th>
              <th className="border px-4 py-2">Products</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border px-4 py-2">{order._id}</td>
                <td className="border px-4 py-2">{order.userName}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">{order.email}</td>
                <td className="border px-4 py-2">{order.phoneNumber}</td>
                <td className="border px-4 py-2">${order.totalPrice}</td>
                <td className="border px-4 py-2">{order.isPayment}</td>
                <td className="border px-4 py-2">
                  <ul>
                  {order.products?.map((product, index) => (
                      <li key={`${product.productId}-${index}`}>
                        {product.title} - {product.quantity} x ${product.price}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border px-4 py-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListOrder;
