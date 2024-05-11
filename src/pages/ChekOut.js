import React, { useState } from 'react';
import '../index.css';
import { useSelector } from 'react-redux';
function ChekOut() {
    const cart = useSelector(state => state.cart);
    const total = useSelector(state => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let errors = {};
        let isValid = true;
        if (!formData.email.includes('@') || !formData.email.indexOf('@') > !formData.email.indexOf('.')) {
            errors.email = 'Email have includes @';
            isValid = false;
        }
        if (formData.password.length < 6) {
            errors.password = 'Email have to be more than 8 char';
            isValid = false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            errors.password = 'Password must contain uppercase letter, one lowercase letter, one number, and one special character ($@$!%*?&)';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('form is successfuly');
        } else {
            console.log('form is not successfuly');
        }
    }
  
    const changehandle = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="flex flex-wrap gap-4 m-auto w-4/5 justify-around min-h-[82.5vh]  max-h-[120vh] py-10 ">
            <form onSubmit={handleSubmit} className="flex flex-wrap w-full gap-3 justify-around">

                {/* left section */}
                <div className="flex flex-wrap w-2/5 max-sm:w-4/5 gap-3 ">
                    {/* Account Information */}
                    <div className="flex flex-wrap w-full h-1/3 max-sm:h-max max-sm:gap-3 max-sm:pb-2 ">
                        <h1 className="font-semibold w-full">Account Information</h1>
                        <div className="mx-3 w-full">
                            <div className="">
                                <label className='relative py-3 w-full'>
                                    <input type="text" placeholder="Email" className="checkout-input" name="email"
                                        value={formData.email} onChange={changehandle} />
                                    <span className='checkout-main'>Email</span>
                                </label>
                            </div>
                            <div>
                                {errors.email && <h5 className='text-red-500 text-sm mx-3 pt-1'>{errors.email}</h5>}
                            </div>
                        </div>
                        <div className="mx-3 w-full">
                            <div>
                                <label className='relative py-3 w-full'>
                                    <input type="password" placeholder="Password" className="checkout-input" name="password"
                                        value={formData.password} onChange={changehandle} />
                                    <span className='checkout-main'>Password</span>
                                </label>
                            </div>
                            <div>
                                {errors.password && <h5 className='text-red-500 text-sm mx-3 pt-1 '>{errors.password}</h5>}
                            </div>
                        </div>
                    </div>
                    {/*  shipping address*/}
                    <div className="flex flex-wrap w-full max-sm:w-4/5 gap-3">
                        <h1 className="font-semibold h-max text-start">shipping address</h1>
                        <div className="mx-3 h-max">
                            <div className="flex flex-wrap gap-3">
                                <label className='relative py-2 w-full'>
                                    <input type="text" placeholder="Address" className="checkout-input" required />
                                    <span className='checkout-main'>Address</span>
                                </label>
                                <label className='relative py-2 w-full'>
                                    <input type="text" placeholder="City" className="checkout-input" required />
                                    <span className='checkout-main'>City</span>
                                </label>
                                <div className="flex flex-wrap gap-5">
                                    <label className='relative py-2'>
                                        <input type="text" placeholder="State/Province" className="checkout-input w-1/2" required />
                                        <span className='checkout-main'>State/Province</span>
                                    </label>
                                    <label className='relative py-2'>
                                        <input type="text" placeholder="Zip/Postal Code" className="checkout-input w-1/2" required />
                                        <span className='checkout-main'>Zip/Postal Code</span>
                                    </label>
                                </div>
                                <div className="w-3/4">
                                    <label className="text-gray-600"> Country </label>
                                    <select className="select checkout-input w-full text-md my-3 focus:outline-none focus:border-b-gray-600 focus:border-transparent" required>
                                        <option selected value="Egypt">Egypt</option>
                                        <option value="US">US</option>
                                        <option value="KSA">KSA</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Gaza">Gaza</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right section */}
                <div className="flex flex-wrap w-2/5 max-sm:w-4/5 gap-2 max-sm:pt-5 max-sm:h-max">
                    {/* payment method */}
                    <div className="flex flex-wrap gap-2 w-full max-sm:pb-3">
                        <h1 className="font-semibold w-full pb-1">payment method</h1>
                        <label className='relative py-3 w-full'>
                            <input type="text" placeholder="Cardholder Name" className="checkout-input" required />
                            <span className='checkout-main'>Cardholder Name</span>
                        </label>
                        <label className='relative py-3 w-full'>
                            <input type="number" placeholder="Card Number" className="checkout-input" required />
                            <span className='checkout-main'>Card Number</span>
                        </label>
                        <div className="flex flex-wrap w-full">
                            <h1 className="w-full text-sm">Expiry</h1>
                            <div className="flex w-full gap-5">
                                <select className="select checkout-input text-sm focus:outline-none rounded-none focus:border-b-gray-600 focus:border-transparent" required>
                                    <option value="01" selected>Jan</option>
                                    <option value="02">Feb</option>
                                    <option value="03">Mar</option>
                                    <option value="04">Apr</option>
                                    <option value="05">May</option>
                                    <option value="06">Jun</option>
                                    <option value="07">Jul</option>
                                    <option value="08">Aug</option>
                                    <option value="09">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                                <select className="select checkout-input text-sm focus:outline-none rounded-none focus:border-b-gray-600 focus:border-transparent" required>
                                    <option value="2016" selected>2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                </select>
                                <label className='relative py-1 w-full'>
                                    <input type="text" placeholder="CVV" className="checkout-input " required />
                                    <span className='checkout-main'>CVV</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Order Summary */}
                    <div className="flex flex-wrap w-full max-sm:gap-3">
                        <h1 className="font-semibold w-full pb-1">Order Summary</h1>
                        {cart && <div className="flex flex-wrap w-full mx-5 ">
                            {cart.map((ele) => (
                                <div className="flex w-full py-1 gap-1">
                                    <h1 className="w-3/4">{ele.name.substring(0, 15)}...</h1>
                                    <h1 className="px-2">{ele.quantity}</h1>
                                    <h1>${ele.price}</h1>
                                </div>
                            ))}
                            <div className="flex w-full pt-3">
                                <h1 className="w-3/4 font-bold">Total</h1>
                                <h1 className="font-bold">${total}</h1>
                            </div>
                        </div>}
                    </div>
                    {/*place holder  */}
                    <div className="mx-auto p-5  ">
                        <button >
                            <input type="submit" value="place holder" className="btn btn-outline text-cyan-500  hover:bg-custom-blue hover:border-custom-blue hover:text-white border-2" />
                        </button>

                    </div>
                </div>
            </form>
        </div>
    )
}


export default ChekOut;