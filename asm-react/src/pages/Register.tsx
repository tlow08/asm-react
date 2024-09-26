import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import AuthFrom from "../components/AuthFrom";
import { InUser } from "../interface/User";
import { registerUser } from "../services/user";

const Register: SubmitHandler<InUser> = () => {
  const nav = useNavigate();
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
  return (
    <div className="max-w-screen-2xl m-auto">
      <h1 className="text-center text-2xl font-semibold">Register</h1>
      <AuthFrom onSubmit={handleRegister}/>
    </div>
  )
}

export default Register
