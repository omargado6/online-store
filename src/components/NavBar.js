import React from 'react';
import logo from "../images/dotSTORE.png";
import proimg from "../images/profile.avif";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function NavBar() {
    const cart = useSelector(state => state.cart);
    const total = useSelector(state => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    return (
        <div className="navbar bg-base-100 w-full sticky z-10 top-0">
            {/* first */}
            <div className="flex-1">
                <Link to="/"> <a className="btn btn-ghost hover:bg-transparent text-xl" href='/'><img src={logo} alt='/' className="h-full" /></a></Link>
                <div className="form-control mx-2 max-sm:hidden">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
            {/* second */}
            <div class="justify-end ">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                </div>
            </div>
            {/* third */}
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            {/* number of itme  */}
                            <span className="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            {/* number of itme */}
                            <span className="font-bold text-lg">{cart.length} Items</span>
                            {/* the price of items */}
                            <span className="text-info">Subtotal: ${total}</span>
                            <div className="card-actions">
                                {/* the link for the chart */}
                                <Link to="/cart">  <button className="btn btn-primary btn-block">View cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={proimg} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/signin'>SignIn</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;