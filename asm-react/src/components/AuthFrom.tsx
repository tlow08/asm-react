import { z } from "zod"
import { InUser } from "../interface/User"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const userSchema = z.object({
    email: z
      .string()
      .nonempty({ message: "Email is required" })  // Ensures email is not empty
      .email({ message: "Invalid email format" }), // Ensures valid email format
    password: z
      .string()
      .nonempty({ message: "Password is required" }) // Ensures password is not empty
      .min(6, { message: "Password must be at least 6 characters long" }) // Ensures password has a minimum length
  });
  
type Props = {
  onSubmit: (values: InUser) => void;

}

const AuthFrom = ({onSubmit}: Props) => {
    const {
        register,
        handleSubmit,
        formState : {errors},
    } = useForm<InUser>({
        resolver: zodResolver(userSchema),
    })
  return (
    <>
       <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-md m-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {required:true})}
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors.email && <p>{errors.email?.message}</p>}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password",{required: true})}
          />
           <div id="emailHelp" className="form-text text-danger">
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
        </div>
       
        <button type="submit" className="btn btn-secondary w-full">
          Submit
        </button>
      </form>
    </>
  )
}

export default AuthFrom