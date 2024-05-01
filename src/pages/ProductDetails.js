import React from 'react'
import laptop from"../images/home/laptop.jpg"
function ProductDetails() {
  return (
    <div className="productDetails">
        <div className="w-11/12 flex flex-wrap justify-around gap-4 m-auto pt-5 text-center">
          <div className="w-3/12 max-sm:w-full">
            <img src={laptop} alt="laptop" />
          </div>
          <div className="w-4/12 h-96 max-sm:w-full">das</div>
          <div className="w-4/12 max-sm:w-full">sda</div>
        </div>
    </div>
  )
}

export default ProductDetails