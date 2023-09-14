import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  // how does reduce work!!!
  const total =  cart?.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:3000/carts/${item._id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          refetch();
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                      }
                  })
          }
      })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>My Cart </title>
      </Helmet>

    
<div className="flex justify-around items-center pb-8  ">
<div className="text-2xl"> Total items: {cart.length}</div>

<div className="text-2xl">Total price: ${total}</div>

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
        <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-700 text-white"> <FaTrash></FaTrash> </button>
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
