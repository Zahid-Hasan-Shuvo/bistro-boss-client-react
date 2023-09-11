import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <Helmet>
        <title>My Cart </title>
      </Helmet>

    
<div className="flex justify-around items-center   uppercase">
<div className="text-3xl"> Total items: {cart.length}</div>

<div className="text-3xl">Total price: ${total}</div>

<button className="btn btn-sm btn-warning">Pay</button>

</div>


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    { 
    cart.map((item, index)=>
      <tr key={item._id}>
      <td>
        {index+1}
      </td>
      <td>
        
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
         
       
      </td>
      <td>
        {item.name}
      </td>
      <td className="text-end">${item.price}</td>
      <td>
        <button className="btn btn-ghost btn-sm bg-red-700 text-white"> <FaTrash></FaTrash> </button>
      </td>
    </tr>
    )
    
    }
     
    
    </tbody>
  
    
  </table>
</div>



    </div>
  );
};

export default MyCart;
