import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useUserContext } from "../../context/context_index";
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const {count} = useUserContext();
    const {openCheckoutSideMenu, closeCheckoutSideMenu,isCheckoutSideMenuOpen, setSearchByTitle, setSearchByCategory } = useUserContext();
    const activesStyle = 'underline underline-offset-4';
  
    const shopping = () =>{
        isCheckoutSideMenuOpen ? closeCheckoutSideMenu() : openCheckoutSideMenu()
    };

  return (

    <nav className="top-0 flex items-center fixed z-10 w-full pt-4 px-8 text-sm font-light bg-[#0B022F] flex-wrap">

        <div className="flex items-center justify-between w-full">
            <NavLink to='/'>
                <img className="w-[150px]" src={logo} alt="logo" />
            </NavLink>
            <input 
            type="search" 
            placeholder="Search"
            className="rounded-lg p-2 w-96 focus:outline-none"
            onChange={(e) => setSearchByTitle(e.target.value)}/>
        </div>
        
        <div className=" flex justify-between items-center w-full py-5 text-sm font-light bg-[#0B022F] text-white flex-wrap"> 
            <ul className="flex items-center gap-6">
                
                <li>
                    <NavLink 
                    to='/'
                    onClick={() => setSearchByCategory()}         
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                        Inicio
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => setSearchByCategory('electronics')}   
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                        Electronicos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/woman'
                    onClick={() => setSearchByCategory("women's clothing")}
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                        Mujer
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/jewelery'
                    onClick={() => setSearchByCategory('jewelery')}
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                        Joyeria
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/men'
                    onClick={() => setSearchByCategory("men's clothing")}
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                        Hombre
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-4">
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                        Mis compras
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) =>
                        isActive ? activesStyle : undefined
                    }>
                    <UserIcon className="h-6 w-6 text-white"/>
                    </NavLink>
                </li>
                <li className="flex items-center cursor-pointer">
                    <ShoppingBagIcon 
                    className="h-6 w-6 text-white"
                    onClick={shopping}/>{count}
                </li>
                
            </ul>   
        </div>
        
    </nav>
  )
};

export default Navbar;
