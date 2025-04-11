import React, { useContext } from 'react';
import { MdClose } from "react-icons/md";
import { FaPlus,FaMinus  } from "react-icons/fa6";
import { storeContext } from '../../Contexts/StoreContextProvider';

const Cart = () => {
   const { food_list,cartItems,removeCart,addToCart,clearCart,totalPrice,totalItem} = useContext(storeContext)
   

    return (
        <div className=' custom-container py-7 '>
            {totalItem>0 ?
            <div className=' flex justify-between flex-wrap '>
                <div className=' w-full md:w-8/12 order-2 md:order-1 shadow-lg p-4'>
                    <h2 className=' text-2xl font-semibold'>Cart List</h2>
                    {
                        food_list.map((item=>{
                        return cartItems[item._id]>0 && 
                            <div key={item._id} className=' grid grid-cols-5 md:items-center relative bg-gray-50 p-2 rounded-lg mb-2'>
                                <img className=' w-24 rounded col-span-2 md:col-span-1' src={item.image} alt="" />
                                <div className=' col-span-3 md:col-span-1'>
                                    <h2>{item.name}</h2>
                                    <h3 className=' text-sm text-gray-600'>Rate: ${item.price}</h3>
                                    <div className=" flex space-x-[1px]  rounded-full">
                                    
                                        <div onClick={()=>removeCart(item._id)} className=" size-5 flex items-center justify-center bg-red-300 rounded-full cursor-pointer">
                                        <FaMinus className=' text-xs' />
                                        </div>
                                    
                                        <span className='size-5 flex items-center justify-center'>{cartItems[item._id]}</span>
                                    
                                        <div onClick={()=>addToCart(item._id)} className=" size-5 flex items-center justify-center bg-green-300 rounded-full cursor-pointer">
                                        <FaPlus className=' text-xs' />
                                        </div>
                                    </div>
                                </div>
                                <p className=' col-span-2 md:col-span-1'>
                                    quentity: {cartItems[item._id]}
                                </p>
                                <p className=' col-span-2 md:col-span-1'>
                                    Price: ${item.price * cartItems[item._id]}
                                </p>
                                <div className=' col-span-1 cursor-pointer flex justify-end text-4xl items-center absolute top-1/2 -translate-y-1/2 right-1'><MdClose onClick={()=>clearCart(item._id)} /></div>
                            </div>
                        }))
                    }
                </div>
                
                <div className=' w-full md:w-3/12 order-1 md:order-2 shadow-lg p-4'>
                    <div className=' shadow p-4 rounded-lg sticky left-0 top-0'>
                    <h2 className=' text-2xl font-semibold mb-2'>Product Details</h2>
                    <h3 className='text-gray-600 font-bold'>Total Items : {totalItem} </h3>
                    <hr className=' border-gray-200 border mb-2' />
                    <h3 className=' text-gray-600 font-bold'>Subtotal Price :  {totalPrice}</h3>
                    <hr className=' border-gray-200 border mb-2' />
                    <p className='text-gray-600 font-bold'>Delivary Charge : 2$</p>
                    <hr className=' border-gray-200 border mb-2' />
                    <h3 className='text-gray-600 font-bold'>Total Price : {totalItem>0?totalPrice +2:totalPrice}$</h3>
                    <button className=' uppercase text-white bg-primary py-2 w-full text-center cursor-pointer font-semibold rounded mt-3'>proceed to checkout</button>
                    </div>
                </div>
            </div>:
            <p className=' p-8 w-full bg-gray-100 text-2xl text-center rounded-2xl my-6'>No Cart Avilable</p>
            }
        </div>
    );
};

export default Cart;