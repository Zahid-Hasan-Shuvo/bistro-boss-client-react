import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
  
   const  handleGoogle =()=>{
   
    signInWithPopup(auth, googleProvider)
    .then(result=>{
      const user=result.user;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User created Successfully!',
        showConfirmButton: false,
        timer: 1500
      })
      if(user){
        navigate("/")
      }
  
  
    })
    .catch(error=>{
      console.log(error);
    })
  
   }
  
   const  handleGithub =()=>{
   
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user=result.user;
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User created Successfully!',
        showConfirmButton: false,
        timer: 1500
      })
      if(user){
        navigate("/")
      }
  
  
    })
    .catch(error=>{
      console.log(error);
    })
  
   }




    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
             
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn text-orange-950 bg-green-900" type="submit" value="Login" />
                            </div>
                            <p className="text-center">OR</p>
         <div className="flex justify-evenly" >
         <FaGoogle onClick={handleGoogle} className="text-3xl text-yellow-900"/> <FaGithub onClick={handleGithub} className="text-3xl text-green-50"/> 
         </div>
                        </form>
                        <p className='text-center'><small>New Here? <Link to="/signup" className="text-orange-800">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;