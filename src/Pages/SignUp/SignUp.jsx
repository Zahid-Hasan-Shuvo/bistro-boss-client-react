import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Welcome to Bistroboss restrurent!",
          showConfirmButton: false,
          timer: 1500,
        });
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      updateUserProfile(data.name, data.photoURL)

  
        .then(() => {
          const saveUser={name:data.name, email:data.email}
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created Successfully!",
                  showConfirmButton: false,
                  timer: 1500,
                });

                navigate("/");
              }
            });
        })
        .catch();
    });
  };

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
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">photo URL is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">email is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    {" "}
                    Minimum 6 caracter is required
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">password should be minimum 30 </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">should be alphbet first </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn  text-orange-950 bg-green-900"
                  type="submit"
                  value="Submit"
                />
              </div>
              <p className="text-center">OR</p>
              <div className="flex justify-evenly">
                <FaGoogle
                  onClick={handleGoogle}
                  className="text-3xl text-yellow-900"
                />{" "}
                <FaGithub
                  onClick={handleGithub}
                  className="text-3xl text-green-50"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                Have an account?{" "}
                <Link to="/login" className="text-orange-800">
                  login
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
