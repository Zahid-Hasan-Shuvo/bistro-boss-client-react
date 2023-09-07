import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import img1 from '../../../assets/menu/pizza-bg.jpg'
import img2 from '../../../assets/menu/salad-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'



const ChefRecomondation = () => {
  return (
    <section>
   <SectionTitle
   subHeading="Should try"
   heading="Chef recomands">

   </SectionTitle>
        
<div className="grid md:grid-cols-3 gap-4">

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Pizza</h2>
    <p>If you try it, never forget it, it is sure.Never forget it</p>
    <div className="card-actions">
      <button className="btn text-yellow-950 bg-green-800">ADD TO CART</button>
    </div>
  </div>
</div>
{/* ////// */}
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Salad!</h2>
    <p>If you try it, never forget it, it is sure, Why are you waiting?</p>
    <div className="card-actions">
      <button className="btn text-yellow-950 bg-green-800">ADD TO CART</button>
    </div>
  </div>
</div>

{/*  */}

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Soup</h2>
    <p>If you try it, never forget it, it is sure.Let try it.never forget it.</p>
    <div className="card-actions">
      <button className="btn text-yellow-950 bg-green-800">ADD TO CART</button>
    </div>
  </div>
</div>


</div>

        </section>
  )
}

export default ChefRecomondation