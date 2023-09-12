import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../../providers/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const {googleSignIn}=useContext(AuthContext)

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser=result.user ;
            console.log(loggedUser);


            const saveUser={name:loggedUser.displayName, email:loggedUser.email}
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser)
              })
                .then(res => res.json())
                .then(() => {
                  
                    navigate(from, { replace: true });
                  
                });








           
       })

    }
  return (
    <div>
        
        <div className="divider">OR</div>
        <div className='w-full text-center my-4 '>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline  text-blue-900">
 <FaGoogle className=' text-yellow-900'></FaGoogle>
</button>
        </div>
        
        </div>
  )
}

export default SocialLogin