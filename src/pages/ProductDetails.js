import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../rtk/slices/CartSlice';
import { fetchProduct } from '../rtk/slices/ProductSlice';
import { useParams } from 'react-router';


function ProductDetails() {
  const [seemore, setSeemore] = useState(true);
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector((state) => state.product);
  const specificCategory = product.filter(item => (item.id === Number(productId)));

  useEffect(() => {
    dispatch(fetchProduct(`https://amzone-colne.onrender.com/products?id=${productId}`))
  }, [dispatch, productId])

  return (
    <div className="">
      {specificCategory.map((product) => (
        <div key={product.id} className="w-11/12 h-full flex flex-wrap justify-around gap-10 m-auto pt-5 text-center">
          {/* imgs */}
          <div className=" w-6/12 h-1/2 max-sm:w-full mx-auto ">
            <div className="card w-5/6 max-2xl:w-96 max-lg:w-80 max-md:w-72 max-sm:w-3/4 bg-base-100 shadow-3xl m-auto">
              <figure className="px-10 max-sm:px-5 pt-5">
                <img src={img || product.images[0].url} alt="" className="rounded-xl cursor-pointer" onClick={() => setImg(product.images[0].url)} />
              </figure>
              <div className="m-auto p-8">
                {product.images.map((image, index) => (
                  <button key={index} onClick={() => setImg(image.url)}>
                    <img src={image.url} alt='' className='h-16 w-16 shadow-md hover:shadow-3xl rounded-lg' />
                  </button>
                ))}
              </div>

            </div>
          </div>
          {/* info */}
          <div className="w-5/12 max-sm:w-full mx-auto">
            <div className="card w-5/6 max-2xl:w-96 max-lg:w-80 max-md:w-64 max-sm:w-3/4 bg-base-100 shadow-3xl m-auto ">
              <div className="card-body text-start">
                <h2 className="card-title text-start "><p>{product.name}</p></h2>
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  <p className=" text-slate-500 text-xs">exclusive of VAT</p>
                </div>
                <div className="information pt-5">
                  {Object.entries(product.about).map(([key, value]) => {
                    if (key === "Colors") {
                      return (
                        <div className="flex gap-3 pb-2" key={key}>
                          <p className="font-bold">{key}:</p>
                          {Object.values(value).map((color, index) => (
                            <p key={index}>{color}</p>
                          ))}
                        </div>
                      )
                    }
                    if (typeof value === 'object') {
                      return (
                        <div className="flex flex-wrap gap-3 pb-2" key={key}>
                          <p className="font-bold">{key}...</p>
                          {Object.entries(value).map(([subkey, subvalue]) => (
                            <div className="flex w-2/3 justify-around mx-auto">
                              <p className="font-semibold w-1/3 ">{subkey}</p> <p className="">{subvalue}</p>
                            </div>))}
                        </div>
                      )
                    }
                    return (
                      <div className="flex  gap-3 pb-2" key={key}>
                        <p className="font-bold  w-1/3">{key} </p>
                        <p className='w-1/3 items-center text-center'>{value} </p>
                      </div>
                    )
                  })}
                  <div onClick={() => setSeemore(!seemore)}>
                    {seemore ? <p className="text-blue-400 cursor-pointer">see more ...</p>
                      : <>
                        <p className="text-blue-400 cursor-pointer">see less ...</p>
                        <div  >
                          <h4 className="my-3 font-bold">About this item</h4>
                          <ul className="list-disc mx-5">
                            {product.aboutthisitem.map((point, index) => {
                              return (
                                <li><p key={index} className="text-sm mb-2">{point.point}</p></li>
                              )
                            }
                            )}
                          </ul>
                        </div >
                      </>}
                  </div>
                </div>
                <div className="mx-auto pt-2">
                  <button className="btn btn-outline text-cyan-500  hover:bg-custom-blue hover:border-custom-blue hover:text-white" onClick={() => dispatch(addProduct(product))}>add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails

