import { createContext, useEffect, useState } from "react";
import { food_list } from './../assets/frontend_assets/assets';

export const storeContext =  createContext()

const StoreContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems(prev=>({...prev,[itemId]:1}))
        }else{
            setCartItems(prev=>({...prev,[itemId]:cartItems[itemId] +1}))
        }
    }

        const removeCart = (itemId)=>{
            setCartItems(prev=>({...prev,[itemId]:cartItems[itemId] -1}))
        }
        const clearCart = (itemId)=>{
            setCartItems(prev=>({...prev,[itemId]:0}))
        }
        let totalPrice = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
               const food =  food_list.find(food=>food._id == item)
               totalPrice += cartItems[item] * food.price
            }
        }

        let totalItem = 0
        for(let item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCart,
        clearCart,
        totalPrice,
        totalItem
    }
    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    );
};

export default StoreContextProvider;