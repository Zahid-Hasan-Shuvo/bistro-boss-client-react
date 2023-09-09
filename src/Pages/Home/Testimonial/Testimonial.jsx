import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-5">
      <SectionTitle
        subHeading="What our Client say"
        heading="Testimonials"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} >
            <div className=" flex flex-col items-center mx-24 my-16">
              <Rating style={{ maxWidth: 160 }} value={review.rating} readOnly />
             <div> <FaQuoteLeft className="text-black  text-5xl mt-6" /></div>
              <p className="py-8">{review.details}</p>
              <p className="text-2xl text-orange-400 ">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
