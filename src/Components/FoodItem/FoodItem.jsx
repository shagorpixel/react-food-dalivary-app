import { useContext } from "react";
import { FaPlus,FaMinus  } from "react-icons/fa6";
import Rating from "../Rating";
import { storeContext } from "../../Contexts/StoreContextProvider";

const FoodItem = ({food}) => {
    
    const {cartItems,addToCart,removeCart} =  useContext(storeContext);
    console.log(cartItems)
    return ( 
        <div className=" rounded-md space-y-3 pb-5 shadow-lg">
            <div className=" relative">
                <img className=" w-full rounded-t-md" src={food.image} alt="" />
                <div className=" absolute right-2 bottom-2">
                    {
                    !cartItems[food._id]? <div onClick={()=>addToCart(food._id)} className=" size-9 bg-white/90 rounded-full flex items-center justify-center cursor-pointer text-2xl"><FaPlus /> </div>:
                    <div className=" flex space-x-2 p-1 bg-white rounded-full">

                        <div onClick={()=>removeCart(food._id)} className=" size-6 flex items-center justify-center bg-red-300 rounded-full cursor-pointer">
                        <FaMinus />
                        </div>

                        <span>{cartItems[food._id]}</span>

                        <div onClick={()=>addToCart(food._id)} className=" size-6 flex items-center justify-center bg-green-300 rounded-full cursor-pointer">
                        <FaPlus />
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className=" px-3 space-y-2">
                <div className=" flex items-center justify-between">
                    <h3 className=" text-lg font-semibold">{food.name}</h3>
                    <Rating rating={food.rating} />
                </div>
                <p className=" text-sm text-gray-600">{food.description}</p>
                <h3 className=" text-xl text-primary font-semibold">${food.price}.00</h3>
            </div>
        </div>
    );
};

export default FoodItem;