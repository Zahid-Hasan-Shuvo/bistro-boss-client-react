import { useForm } from "react-hook-form";



const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

  console.log(watch("example")); // 
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex flex-col">
      <div className="text-center ">
        <h1 className="text-3xl font-bold">Signup now!</h1>
        
      </div>
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" {...register("name",{ required: true })  } className="input input-bordered" />
            {errors.name && <span className="text-red-500">name is required</span>}
            
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
            {errors.email && <span  className="text-red-500">email is required</span>}
          </div>

      

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength:20 })} className="input input-bordered" />
            {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">signUp</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp