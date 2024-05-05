import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import splt from 'spltjs';
import anime from 'animejs';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../rtk/slices/CartSlice';
import { fetchProduct } from '../rtk/slices/ProductSlice';
function CategoryPage() {
  const dispatch = useDispatch();
  const { category } = useParams();

  const navigate =  useNavigate();


  const product = useSelector((state) => state.product);
  const specificCategory = product.filter(item => (item.category === category));
  console.log(specificCategory);
  useEffect(() => {
    dispatch(fetchProduct(category))
  }, [dispatch, category])
  useEffect(() => {
    anime({
      begin: splt({}),
      targets: '.char',
      opacity: [0, 1],
      scale: [1, 1.5],
      delay: anime.stagger(50),
      easing: 'cubicBezier(.71,-0.77,.43,1.67)',
      complete: () => {
        splt.revert();
      },
    });
  }, []);

  return (
    <div className="categoryPage">
      {/* title */}
      <div className="mainTitle p-16">
        <h1 className="char text-center text-custom-blue dark:text-white text-3xl font-serif font-semibold">Category Page</h1>
      </div>
      {/* cards */}
      <div className="categoryCards w-5/6 m-auto flex flex-wrap justify-around gap-5 pt-3">
        {specificCategory.map((card) => (
          <div key={card.id} className="card w-64 h-80 m-auto shadow-3xl hover:scale-105 duration-500 ">
            <figure><img src={card.images[0].url} alt="Shoes" className="h-full w-4/5 pt-4 m-auto rounded-xl" /></figure>
            {/* name */}
            <p className="text-lg font-bold px-5 pt-2 dark:text-white ">
              {card.name.length > 20 ? `${card.name.substring(0, 20)}...` : card.name}
            </p>
            {/* featurse */}
            <div className="flex flex-wrap gap-2 mx-10 py-px text-sm">
              <h3 className="card-bordered w-max px-2 border-slate-400 text-slate-950 dark:text-white rounded-lg">iphone</h3>
              <h3 className="card-bordered w-max px-2 border-slate-400 text-slate-950 dark:text-white rounded-lg">red</h3>
            </div>
            {/* price */}
            <p className="font-bold px-5 pt-1 text-xl text-red-600 dark:text-red-500"><span className="text-slate-600 text-xs dark:text-white">$</span>{card.price}</p>
            <p className="px-5 text-slate-400 text-xs">exclusive of VAT</p>
            {/* the icon >>> */}
            <div className="text-center p-4 m-auto ">
              <Link onClick={() => dispatch(addProduct(card))} className="px-2"><FontAwesomeIcon className="badge p-2 shadow-md hover:shadow-xl text-slate-400 dark:text-white hover:scale-125" icon={faCartPlus} /></Link>
              {/* <Link to={`/products/${card.id}`} className="px-2"><FontAwesomeIcon className="badge p-2 shadow-md hover:shadow-xl text-slate-400 dark:text-white hover:scale-125 " icon={faCircleInfo} /></Link> */}
              <button onClick={()=> navigate(`/products/${card.id}`)} className="px-2"><FontAwesomeIcon className="badge p-2 shadow-md hover:shadow-xl text-slate-400 dark:text-white hover:scale-125 " icon={faCircleInfo} /></button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CategoryPage;