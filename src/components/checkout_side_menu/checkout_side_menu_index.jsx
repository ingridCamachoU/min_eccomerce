import { XMarkIcon } from '@heroicons/react/24/solid'
import { useUserContext } from '../../context/context_index';
import OrderCardIndex from '../oder_card/order_card_index';
import { totalPrice } from '../../utils/utils_index';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {

    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, reduceCount, setOrder, order, setCount, setSearchByTitle} = useUserContext();

    const handleDelete = (id) => {
        const filterProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filterProducts); 
        reduceCount();
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01/10/23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        };

        setOrder([...order, orderToAdd]);
        setCartProducts([]);
        setSearchByTitle(null);
        setCount(0);
    };

  return (

        <div>
            {
                cartProducts.length > 0 ? <aside 
                className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[460px] py-4 px-5 h-full top-0 mt-[120px] flex-col fixed bg-white right-0 border border-gray-400`}>
                    <div className="flex justify-between items-center">
                        <h2 className="font-meduim text-2xl mb-2">Mis Pedidos</h2>
                        <div>
                            <XMarkIcon 
                            className="h-6 w-6 text-black cursor-pointer"
                            onClick={closeCheckoutSideMenu}/>
                        </div>
                    </div>
                    <div className='p-6 overflow-y-scroll flex-1'>
                    {
                        cartProducts.map( product => (
                            <OrderCardIndex 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            image={product.image} 
                            price={product.price}
                            handleDelete={handleDelete}/>
                        ))
                    }
                    </div>
                    <div className='px-6 mb-28'>
                        <p className='flex justify-between font-bold'>
                            <span>Total:</span>
                            <span>$ {totalPrice(cartProducts)}</span>
                        </p>
                        <Link to='/my-orders/last'>
                        <button  
                        className='bg-[#110541] text-[#d6d9f8] py-3 w-full font-bold mt-6 rounded-lg mb-6'
                        onClick={() => handleCheckout()}>
                            Comprar
                        </button>
                        </Link>
                        
                    </div>
                </aside> : null
            }
        </div>
        
    )
}

export default CheckoutSideMenu;


