import { useContext, useState } from "react";
import { storeContext } from "../../Contexts/StoreContextProvider";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
   const {food_list} =  useContext(storeContext);

   const filterData =category == "All"?food_list : food_list.filter(data=>data.category === category);

   const [lastSlice,setLastSlice] = useState(4);
    return (
        <div className=" custom-container space-y-2 py-8 ">
            <h2 className=" text-2xl font-semibold">Top dishes near you</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    filterData.slice(0,lastSlice).map(food=><FoodItem key={food._id} food={food}></FoodItem>)
                }
            </div>
            {
             filterData.length>lastSlice &&
            <div className=" pt-6 text-center"><button onClick={()=>setLastSlice(prev=>prev + 4)} className=" bg-red-500 text-white py-1 px-4 rounded cursor-pointer">Load More..</button></div>
            }
        </div>
    );
};

export default FoodDisplay;