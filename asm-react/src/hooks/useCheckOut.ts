import { z } from "zod";
import { useShopCart } from "./useShoppCart";
import { useForm } from "react-hook-form";
import { InOrder } from "../interface/Order";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderCreate } from "../services/order";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const orderSchema = z.object({
    userName: z.string().min(1, "Username is required"),
    address: z.string().min(1, "Address is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    totalPrice: z.number().optional(),
    isPayment: z.string().min(1, "isPayment is required"),
    products: z
      .array(
        z.object({
          productId: z.string(),
          title: z.string(),
          quantity: z.number(),
          price: z.number(),
        })
      )
      .optional(),
  });
const useCheckOut = () => {
  const { totalPrice, cartItems } = useShopCart();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InOrder>({
    resolver: zodResolver(orderSchema),
  });

  const createCheckOut = (data: InOrder) => {
    console.log(data);
    // console.log(cartItems);
    if (cartItems.length === 0) {
      console.error(
        "Cart is empty. Please add products to the cart before submitting."
      );
      toast.error(
        "Giỏ hàng trống! Vui lòng thêm sản phẩm vào giỏ hàng trước khi gửi."
      );
      return;
    }
    const orderData = {
      ...data,
      totalPrice,
      products: cartItems.map((item) => ({
        productId: item.product._id,
        title: item.product.title,
        quantity: item.quantity,
        price: item.product.price,
      })),
    };
    console.log(orderData);
    orderCreate(orderData)
      .then(() => {
        toast.success("order successfully");
        // clearCart();
        if (data.isPayment === "bankTransfer") {
            nav("/bank-transfer"); 
          } else {
            nav("/payment-old"); 
          }
      })
      .catch((error) => {
        // toast.error(error.message);
        console.log(error.message);
      });
  };
  return {
    createCheckOut,
    register,
    handleSubmit,
    errors,
    totalPrice
  }
}

export default useCheckOut
