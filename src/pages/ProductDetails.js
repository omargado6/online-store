import React from 'react'
import laptop from "../images/home/laptop.jpg"
function ProductDetails() {
  return (
    <div className="productDetails">
      <div className="w-11/12 h-screen flex flex-wrap justify-around gap-3 m-auto pt-5 text-center">
        {/* imgs */}
        <div className=" w-5/12 h-1/2 max-sm:w-full m-auto ">
          <div className="card w-96 bg-base-100 shadow-3xl m-auto">
            <figure className="px-10 pt-5">
              <img src={laptop} alt="" className="rounded-xl" />
            </figure>
            <div className="m-auto p-5"> 
                <button className="p-2"><img src={laptop} alt='' className='w-20 h-20 shadow-md hover:shadow-3xl rounded-lg'/></button>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="w-5/12 max-sm:w-full m-auto">
          das
        </div>
      </div>
    </div>
  )
}

export default ProductDetails