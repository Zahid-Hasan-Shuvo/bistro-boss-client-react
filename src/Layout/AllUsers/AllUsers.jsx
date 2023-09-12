import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { FaTrash, FaUserShield } from 'react-icons/fa'


const AllUsers = () => {

   const handleMakeAdmin =id=>{
    
   }

    const {data:users=[], refetch}=useQuery(['users'], async()=>{
        const res=await fetch('http://localhost:3000/users')
        return res.json()
    })
  return (

    <div className='w-full'>
   <Helmet>
        <title> All users</title>
      </Helmet>

 <h3 className='text-3xl font-semibold my-4 text-center'>Total Users:{users.length}</h3>

 <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
users.map((user, index)=><tr key={user._id}>
    <th>{index+1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.role==='admin'? 'admin' : <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost btn-sm bg-yellow-700 text-white"> <FaUserShield></FaUserShield> </button>}</td>
    <td>
        <button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-sm bg-red-700 text-white"> <FaTrash></FaTrash> </button>
      </td>
    </tr>)
      }
     
      
    </tbody>
  </table>
</div>

    </div>
  )
}

export default AllUsers