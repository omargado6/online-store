import React from 'react';
import { Link } from 'react-router-dom';

import mobile from '../images/home/pexels-noah-erickson-97554-404280 (1).jpg';
import laptop from '../images/home/laptop.jpg';
import camera from '../images/home/camera2.jpg';
import Headphone from '../images/home/headphone.jpg';
import smartwatch from '../images/home/smartwatches2.jpg';
function HomePage() {
  const categories = [
    { id: 1, name: 'Headphone & Earpods', image: Headphone, to: '/HeadphonesEarpods' },
    { id: 2, name: 'Laptops & Tablets', image: laptop, to: '/LaptopsTablets' },
    { id: 3, name: 'Camera', image: camera, to: '/camera' },
    { id: 4, name: 'Smartwatches', image: smartwatch, to: '/Activitytrackerssmartwatches' }
  ]
  return (
    <div className="Homepage w-5/6 m-auto p-7">
      {/* best category */}
      <div className="card w-8/12 h-96 max-md:h-72 m-auto bg-base-100 shadow-3xl mb-3 hover:-translate-y-6 duration-700">
        <figure className="h-3/5"><img src={mobile} alt="Shoes" className="h-full w-full hover:scale-150 duration-300" /></figure>
        <div className="card-body justify-around">
          <h2 className="card-title font-bold max-am:justify-center">Mobile<div className="badge badge-primary max-[360px]:hidden">Best</div></h2>
          <div className=" text-center pt-1">
            <Link to='/mobile' className="badge  badge-primary p-5 max-sm:p-auto hover:font-bold transition-all  ">More Details</Link>
          </div>
        </div>
      </div>
      {/* other categories */}
      <div className="flex flex-wrap justify-around gap-1 pt-3">
        {categories.map((ele) => (
          <div className="card w-2/5 max-sm:w-3/5 h-80 max-md:h-64 m-auto bg-base-100 shadow-3xl mb-3 hover:-translate-y-2 duration-500" key={ele.id}>
            <figure className="h-3/5"><img src={ele.image} alt="Shoes" className="h-full w-full hover:scale-125 duration-500" /></figure>
            <div className="card-body justify-around">
              <h2 className="card-title font-bold ">{ele.name}</h2>
              <div className=" text-center pt-1">
                <Link to={ele.to} className="badge  badge-primary p-4 max-sm:p-auto hover:font-bold transition-all  ">More Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage;