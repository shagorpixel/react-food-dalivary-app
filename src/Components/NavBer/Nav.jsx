import { assets } from '../../assets/frontend_assets/assets';
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
const NavItems = ({toggleItems}) => {
    const navList = [
       
        {
            name:'Menu',
            path:'/menu'
        },
        {
            name:'About Us',
            path:'/about'
        },
        {
            name:'Mobile App',
            path:'/mobileApp'
        },
        {
            name:'Cart',
            path:'/cart'
        },
        {
            name:'Sign In',
            path:'/signin'
        }
    ]
    return (
        <ul className=' flex flex-col md:flex-row md:space-x-6'>
            {
                navList.map((navList,index)=>
                    navList.name === "Sign In" || navList.name === "Cart"?
                <li key={index} onClick={toggleItems} className='md:hidden block'>
                    <NavLink
                    to={navList.path}
                    className={({ isActive}) =>
                        isActive ? "text-primary text-lg" : "text-lg"
                      }

                    >{navList.name}</NavLink>
                </li> :
                <li onClick={toggleItems} key={index}>
                <NavLink
                to={navList.path}
                className={({ isActive}) =>
                    isActive ? "text-primary font-bold text-lg " : "font-semibold text-lg"
                  }

                >{navList.name}</NavLink></li>
                )
            }
        </ul>
    );
};

const Nav = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleItems = ()=>setIsMenuOpen(prev=>!prev);
    return (
        <nav className=' py-6 relative'>
            <div className=' flex justify-between items-center custom-container'>
                <div>
                <Link to='/'><img src={assets.logo} alt="" /></Link>
                </div>
                {/* Dextop Menu Items */}
                <div className=' hidden md:block'>
                <NavItems></NavItems>
                <span></span>
                </div>
                {/* Mobile Menu Items  */}
                <div className={`h-screen flex items-center justify-center bg-black/80 text-white w-full absolute left-0 top-0 md:hidden text-center transition transform ${isMenuOpen?'translate-x-0':'-translate-x-full'}`}>
                    <NavItems toggleItems={toggleItems}></NavItems>
                    <span onClick={toggleItems} className=' text-4xl absolute right-1 top-4 cursor-pointer'><IoCloseOutline /></span>
                </div>
                <div className=' hidden md:flex space-x-12 items-center'>
                        <span className=' text-2xl'><CiSearch /></span>
                        <Link to='cart'>
                            <div className=' relative'>
                                <span className=' text-2xl'><FaCartShopping /></span>
                                <div className=' size-5 bg-primary text-white text-xs flex items-center justify-center rounded-full absolute -right-4 -top-4'>10</div>
                            </div>
                        </Link>
                        <button className=' button ring ring-primary  hover:bg-primary hover:text-white  '>Sign In</button>
                </div>
                <span onClick={toggleItems} className=' text-2xl cursor-pointer md:hidden'><FaBars /></span>
            </div>
        </nav>
    );
};

export default Nav;