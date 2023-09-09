import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
 
    const {createUser} =useContext(AuthContext)

    const onSubmit = data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user

            Swal.fire({
                title: 'User Created Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

        })
    } 

  
  return (
    <>

    <Helmet>
    <title>sign up</title>
</Helmet>

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
            <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength:20,  pattern: /^[A-Za-z]+$/i })} className="input input-bordered" />
            {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-red-500"> Minimum 6 caracter is  required</p>}
            {errors.password?.type === 'maxLength' && <p className="text-red-500">password should be minimum 30 </p>}
            {errors.password?.type === 'pattern' && <p className="text-red-500">should be alphbet first  </p>}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
         
            <input className="btn  text-orange-950 bg-green-900" type="submit" value="Submit" />
          </div>
        </form>
        <p className='text-center'><small>Already have an account? <Link to="/login">Login</Link> </small></p>
      </div>
    </div>
  </div>
  </>
  )
}

export default SignUp