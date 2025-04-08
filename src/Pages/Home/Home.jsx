import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";

const Home = () => {
    const [category,setCategory] = useState('All');
    return (
        <div>
            <Header></Header>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            <FoodDisplay category={category} ></FoodDisplay>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;