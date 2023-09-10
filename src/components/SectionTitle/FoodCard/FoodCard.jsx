import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} =item;

    const {user} =useContext(AuthContext)
    const [, refetch]=useCart()
    const navigate= useNavigate()
    const location =useLocation()

const handleAddToCart =(item)=>{
  console.log(item);
  
  if(user && user.email){
    const cartItem ={ menuItemId:_id, name, image, price, email:user.email}

    fetch('http://localhost:3000/carts',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(cartItem)

    })
    .then(res=> res.json())
    .then(data=>{
      if(data.insertedId){
        refetch()
        Swal.fire({
          title: 'Add to cart successfully',
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      });
      }
    })
  
  }
  else{
    Swal.fire({
      title: 'Please login to order to food',
  
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log in now!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
         navigate("/login", {state:{from:location}})
      

        )
      }
    })
  }
}

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={image} alt="image" className="rounded-xl" />
      <p className="absolute  px-4 right-0 mr-12 rounded text-1xl -mt-36  bg-slate-900">${price}</p>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        <button onClick={()=>handleAddToCart(item)} className="btn text-gray-800 border-orange-400 btn-outline border-0 border-b-4 mt-4 bg-slate-100">Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export default FoodCard