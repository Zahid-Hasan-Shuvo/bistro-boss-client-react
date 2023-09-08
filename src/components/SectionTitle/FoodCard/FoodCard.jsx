

const FoodCard = ({item}) => {
    const {name,image, price, recipe} =item;
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
        <button className="btn text-yellow-950 bg-green-800">Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export default FoodCard