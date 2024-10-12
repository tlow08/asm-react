
import AuthFrom from "../components/AuthFrom";
import { useAuth } from "../hooks/useAuth";


const Register: React.FC = () => {
  
  const {handleRegister} = useAuth();
  return (
    <div className="max-w-screen-2xl m-auto  pt-16">
      <h1 className="text-center text-2xl font-semibold ">Register</h1>
      <AuthFrom onSubmit={handleRegister}/>
    </div>
  )
}

export default Register
