import singlePhoto from "../../../src/assets/home/chef-service.jpg";

const SinglePhoto = () => {
  return (
    <div>
     <div className="relative">
     <img src={singlePhoto} alt="" />
     </div>
      <div className=" bg-white p-9 text-black  absolute  -mt-64 mx-auto max-w-4xl  ml-24  rounded ">
        <h2 className=" text-4xl text-center">Bistro Boss</h2>
        <p >
          This is the where, where we made of your favourite foods. Please come
          to us, and see how beautifull is that?
         <p className="text-center"> where we made of your favourite foods. Please and see how
          beautifull is that? We are sure You love it.</p>
         
          <p className="text-center"> So, Why are you waiting...!</p>
        </p>
      </div>
    </div>
  );
};

export default SinglePhoto;
