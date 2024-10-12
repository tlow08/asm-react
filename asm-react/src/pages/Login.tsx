
import AuthFrom from "../components/AuthFrom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const {handleLogin} = useAuth();
  return (
    <div className="max-w-screen-2xl m-auto  pt-16">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <AuthFrom onSubmit={handleLogin}/>
    </div>
  )
}

export default Login
