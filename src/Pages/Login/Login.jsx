

import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



const Login = () => {

    const captchaRef=useRef(null)
    const [disabled, setDisabled]=useState(true)

useEffect(()=>{
    loadCaptchaEnginge(6); 
},[])

const handleLogin =(event)=>{
    event.preventDefault()
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email, password);
}

const handleValidateCaptcha=(e)=>{
    e.preventDefault()
    const user_captcha_value=captchaRef.current.value
    if (validateCaptcha(user_captcha_value)==true) {
        setDisabled(false);
    }

    else {
        setDisabled(true);
    }

}


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col">
        <div className="text-center lg:text-left">
         
        <h1 className=" text-3xl font-bold">Login Now!</h1>
        </div>
      
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
            <LoadCanvasTemplate />
              <input
              ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the text above"
                className="input input-bordered"
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>validate</button>
            
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn text-white bg-green-900" type="submit" value="login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
