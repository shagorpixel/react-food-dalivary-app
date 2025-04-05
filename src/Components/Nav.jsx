import { assets } from './../assets/frontend_assets/assets';
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const NavItems = () => {
    const navList = [
        {
            name:'home',
            path:'/'
        },
        {
            name:'menu',
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
                <li className='md:hidden block' key={index}>
                    <NavLink
                    to={navList.path}
                    className={({ isActive}) =>
                        isActive ? "text-primary" : ""
                      }

                    >{navList.name}</NavLink>
                </li> :
                <li key={index}>
                <NavLink
                to={navList.path}
                className={({ isActive}) =>
                    isActive ? "text-primary font-bold text-xl" : "font-semibold text-xl"
                  }

                >{navList.name}</NavLink></li>
                )
            }
        </ul>
    );
};

const Nav = () => {
    return (
        <nav className=' py-4'>
            <div className=' flex justify-between items-center custom-container'>
                <div>
                <img src={assets.logo} alt="" />
                </div>
                <div className=' hidden md:block'>
                <NavItems></NavItems>
                </div>
                <div className=' hidden md:flex space-x-12 items-center'>
                        <span className=' text-2xl'><CiSearch /></span>
                        <div className=' relative'>
                            <span className=' text-2xl'><FaCartShopping /></span>
                            <div className=' size-5 bg-primary text-white text-xs flex items-center justify-center rounded-full absolute -right-4 -top-4'>10</div>
                        </div>
                        <button className=' py-1.5 px-8 ring ring-primary rounded-full cursor-pointer '>Sign In</button>
                </div>
                <span className=' text-2xl cursor-pointer md:hidden'><FaBars /></span>
            </div>
        </nav>
    );
};

export default Nav;