import { assets } from "../../assets/frontend_assets/assets";

const DownloadApp = () => {
    return (
        <div className=" max-w-xl mx-auto text-center space-y-5 py-8">
            <h2 className=" text-4xl font-semibold text-gray-800 ">For Better Experience Download Tomato App</h2>
            <div className=" flex flex-wrap gap-2 items-center justify-center">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default DownloadApp;