import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { InUser } from "../interface/User";
import { loginUser } from "../services/user";
import toast from "react-hot-toast";
import AuthFrom from "../components/AuthFrom";

const Login = () => {
  const nav = useNavigate();
  const handleLogin: SubmitHandler<InUser>= (values :InUser)=>{
    loginUser(values)
    .then((data)=>{
      toast.success("Login successfully!");
      localStorage.setItem("token", data.data.accessToken);
      nav("/admin");
    })
    .catch((error)=>{
      console.log(error.message);
      toast.error("Error: " + error.message);
    })
  }
  return (
    <div className="max-w-screen-2xl m-auto">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <AuthFrom onSubmit={handleLogin}/>
    </div>
  )
}

export default Login
