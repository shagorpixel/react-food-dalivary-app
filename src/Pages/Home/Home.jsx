import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

const Home = () => {
    const [category,setCategory] = useState('All');
    return (
        <div>
            <Header></Header>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            <FoodDisplay category={category} ></FoodDisplay>
        </div>
    );
};

export default Home;