import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
const Rating = ({rating}) => {
    return (

        <div className=" flex items-center space-x-1">
            {
            // Array.from({length:5},(d,i)=>{
            //     const newIndex = i + 1;
            //     return newIndex<= rating?<IoIosStar key={newIndex} className=" text-primary" /> : <IoIosStarOutline key={newIndex} className=" text-gray-400" />
            // })
            Array.from({length:5},(_,i)=>{
                const newIndex = i + 1;
                return rating>= newIndex? <FaStar className=" text-yellow-400" key={i} />:<FaRegStar className=" text-gray-500" key={i} />
            })
            }
        </div>

    );
};

export default Rating;