import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteProduct } from '../rtk/slices/CartSlice';
import { useNavigate } from 'react-router';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const navigate =  useNavigate();

  const total = useSelector(state => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  
  return (
    <div className="cartPage ">
      <h1 className="text-center text-custom-blue dark:text-white text-3xl font-serif font-semibold">Your Page</h1>
      <div className="overflow-x-auto pt-10">
        <h3 className="font-bold mx-10 pb-5">Total Price : ${total}</h3>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quanitity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((product) => (
              <tr key={product.id}>
                <th></th>
                <td className="w-1/5">
                  <img className='w-20 h-20' src={product.images[0].url} alt="Avatar Tailwind CSS Component" />
                </td>
                <td className="w-1/5 font-semibold">{product.name}</td>
                <td className="w-2/12 font-bold">${product.price}</td>
                <td className="w-1/12 font-bold">{product.quantity}</td>
                <th className="w-1/5 max-sm:w-2/12">
                  <button className="btn btn-outline text-green-600  hover:bg-green-600 hover:border-green-600 hover:text-white btn-sm m-1"onClick={()=> navigate(`/products/${product.id}`)} >details</button>
                  <button className="btn btn-outline text-red-500  hover:bg-red-500 hover:border-red-500 hover:text-white btn-sm m-1" onClick={() => dispatch(deleteProduct(product))}>delete</button>
                </th>
              </tr>
            ))}

          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mx-auto text-center p-2">
        <button className="btn btn-outline text-red-500  hover:bg-red-500 hover:border-red-500 hover:text-white" onClick={() => dispatch(clear())}>clear all product</button>
      </div>
    </div>
  )
}

export default CartPage;