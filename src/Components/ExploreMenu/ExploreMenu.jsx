import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({category,setCategory}) => {
    console.log(category);
    return (
        <div className=" custom-container py-6 space-y-2">
            <h2 className=" text-2xl font-semibold">Explore Our Menu</h2>
            <p className=" max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dicta aperiam inventore quibusdam quia odit? dolor sit amet consectetur adipisicing elit.</p>
            <div className=" flex flex-wrap justify-between">
                {
                  menu_list.map((item,index)=>
                    <div 

                    onClick={()=>setCategory(prev=>prev === item.menu_name?'All':item.menu_name)} 

                    className=" text-center cursor-pointer" key={index}>
                        <img className={`max-w-24 rounded-full ${category === item.menu_name? 'ring-4 ring-primary scale-105':''}`} src={item.menu_image} alt="" />
                        <h3 className=" text-lg font-semibold">{item.menu_name}</h3>
                    </div>
                )  
                }
            </div>
            <hr className="  border-primary border-1" />

        </div>
    );
};

export default ExploreMenu;