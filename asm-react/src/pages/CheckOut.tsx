// import { useForm } from "react-hook-form";
// import { useShopCart } from "../hooks/useShoppCart";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { InOrder } from "../interface/Order";
// import { orderCreate } from "../services/order";
// import toast from "react-hot-toast";

import useCheckOut from "../hooks/useCheckOut";

// const orderSchema = z.object({
//   userName: z.string().min(1, "Username is required"),
//   address: z.string().min(1, "Address is required"),
//   email: z.string().email("Invalid email address"),
//   phoneNumber: z.string().min(1, "Phone number is required"),
//   totalPrice: z.number().optional(),
//   isPayment: z.string().min(1, "isPayment is required"),
//   products: z
//     .array(
//       z.object({
//         productId: z.string(),
//         title: z.string(),
//         quantity: z.number(),
//         price: z.number(),
//       })
//     )
//     .optional(),
// });

const CheckOut = () => {

  const {handleSubmit, createCheckOut, register, errors, totalPrice} = useCheckOut();
  // const { totalPrice, cartItems } = useShopCart();
  // // console.log(cartItems);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<InOrder>({
  //   resolver: zodResolver(orderSchema),
  // });

  // const OnSubmit = (data: InOrder) => {
  //   console.log(data);
  //   // console.log(cartItems);
  //   if (cartItems.length === 0) {
  //     console.error(
  //       "Cart is empty. Please add products to the cart before submitting."
  //     );
  //     toast.error(
  //       "Giỏ hàng trống! Vui lòng thêm sản phẩm vào giỏ hàng trước khi gửi."
  //     );
  //     return;
  //   }
  //   const orderData = {
  //     ...data,
  //     totalPrice,
  //     products: cartItems.map((item) => ({
  //       productId: item.product._id,
  //       title: item.product.title,
  //       quantity: item.quantity,
  //       price: item.product.price,
  //     })),
  //   };
  //   console.log(orderData);
  //   orderCreate(orderData)
  //     .then(() => {
  //       toast.success("order successfully");
  //       // clearCart();
  //     })
  //     .catch((error) => {
  //       // toast.error(error.message);
  //       console.log(error.message);
  //     });
  // };

  // console.log("Form errors:", errors);
  return (
    <>
      <h1 className="text-center text-2xl font-semibold mt-8">Payment information</h1>
      <form
        onSubmit={handleSubmit(createCheckOut)}
        className="max-w-screen-lg m-auto"
      >
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            {...register("userName")}
          />
          {errors.userName && (
            <p className="text-danger">{errors.userName.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-danger">{errors.address.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" {...register("email")} />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="text-danger">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="mb-3 flex justify-between text-xl font-semibold">
          <p>Total amount:</p>
          <span className="text-danger">{totalPrice} $</span>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
          Payment form
          </label>
          <select {...register("isPayment")} className="form-control">
            <option value="">Chọn phương thức</option>
            <option value="cash">Tiền mặt</option>
            <option value="bankTransfer">Chuyển khoản</option>
          </select>
          {errors.isPayment && (
            <p className="text-danger">{errors.isPayment.message}</p>
          )}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckOut;
