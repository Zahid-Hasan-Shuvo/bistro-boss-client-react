import SectionTitle from "../../../components/SectionTitle/SectionTitle"

import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
        <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
        ></SectionTitle>
        
      <div className="md:flex justify-center items-center pt-12 pb-20 px-36  bg-slate-500 bg-opacity-20">
<div  >
    <img className=" w-4/5 rounded "  src={featuredImg} alt="" />
</div>
<div className="md:ml-10 text-yellow-50 ">
    <p>Aug 20, 2023</p>
    <p className="uppercase"> Where can i get some?</p>
    <p>sectetur adipisicing elit.
     Voluptatum nemo, labore placeat possimus quam, itaque repudiandae expedita reiciendis unde </p>
    <button className="btn btn-outline border-0 border-b-4  mt-4 text-green-500">Order now</button>
</div>


      </div>
        
        </section>
  )
}

export default Featured