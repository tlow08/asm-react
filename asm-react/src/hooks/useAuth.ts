import { SubmitHandler, useForm } from "react-hook-form";
import { InUser } from "../interface/User";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/user";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const userSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }), 
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }), 
  });
  
export const useAuth = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InUser>({
    resolver: zodResolver(userSchema),
  });
  const handleLogin: SubmitHandler<InUser> = (values: InUser) => {
    loginUser(values)
      .then((data) => {
        toast.success("Login successfully!");
        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("role", data.data.user.role);
        nav("/admin");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Error: " + error.message);
      });
  };
  const handleRegister: SubmitHandler<InUser> = (values :InUser)=>{
    registerUser(values)
    .then(()=>{
      toast.success("Register successfully!");
      nav("/login");
    })
    .catch((error)=>{
      console.log(error);
      toast.error("Error: " + error.message);
    })
  }

  return {
    handleLogin,
    handleRegister,
    register,
    handleSubmit,
    errors
  };
};
