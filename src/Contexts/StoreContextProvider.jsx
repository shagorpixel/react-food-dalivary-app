import { createContext, useState } from "react";
import { food_list } from './../assets/frontend_assets/assets';

export const storeContext =  createContext()

const StoreContextProvider = ({children}) => {
    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems(prev=>({...prev,[itemId]:1}))
        }else{
            setCartItems(prev=>({...prev,[itemId]:prev[itemId] + 1}))
        }
    }

    const removeCart = (itemId)=>{
        setCartItems(prev=>({...prev,[itemId]:prev[itemId] - 1}))
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCart

    }
    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    );
};

export default StoreContextProvider;