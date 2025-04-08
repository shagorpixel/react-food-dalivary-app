import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className=" bg-black py-16 text-gray-300 px-4 md:px-0 ">
            <div className=" gap-10 custom-container grid grid-cols-2 md:grid-cols-4 ">
                <div className=" space-y-4 col-span-2 ">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum tenetur magni. Libero minus magni repudiandae aliquid. Possimus praesentium velit temporibus veniam laborum beatae suscipit pariatur consequatur animi voluptate, neque tempore! Non eligendi quisquam distinctio nam perferendis.</p>
                    <div className=" flex space-x-2">
                        <a className=" size-10 text-xl rounded-full border border-gray-400 flex items-center justify-center" href="#"><FaFacebookF /></a>
                        <a className=" size-10 text-xl rounded-full border border-gray-400 flex items-center justify-center" href="#"><FaTwitter /></a>
                        <a className=" size-10 text-xl rounded-full border border-gray-400 flex items-center justify-center" href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className=" text-2xl font-semibold">Company</h2>
                    <ul className=" space-y-2">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About Us</Link></li>
                        <li><Link to={'/'}>Delivary</Link></li>
                        <li><Link to={'/'}>Privicy Policy</Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h2 className=" text-2xl font-semibold">Get In Touch</h2>
                    <ul className=" space-y-2">
                        <li>+1-212-01948</li>
                        <li>contacttomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <p className=" text-center my-3">CopyWright {new Date().getFullYear()} @techshagor.com - All right reserved</p>
        </footer>
    );
};

export default Footer;