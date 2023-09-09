import { useUserContext } from "../../context/context_index";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = (product) => {

  const {incrementCount, reduceCount, openProductDetail, setProductToShow, setCartProducts, cartProducts, openCheckoutSideMenu, closeCheckoutSideMenu, closeProductDetail} = useUserContext();

  const showProduct = (product) => {
    openProductDetail();
    setProductToShow(product);
    closeCheckoutSideMenu();
  };

  const addProductsToCart = (e, product) =>{
    e.stopPropagation();
    setCartProducts([...cartProducts, product]);
    incrementCount();
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const handleDelete = (id) => {
    const filterProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filterProducts);
    reduceCount();
  };

  const deleteProductOrder = (e, product) => {
    e.stopPropagation();
    handleDelete(product.id);
    reduceCount();
  }

  const renderIcon = (id) => {

    const isInCart = cartProducts.filter(product => product.id === id).length > 0;

    if (isInCart){
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-[#2e1d72] w-6 h-6 rounded-full p-1 m-2'
          onClick={(e) => deleteProductOrder(e, product)}>     
          <CheckIcon className="h-6 w-6 text-white"/>
        </div>
      );
    }else{
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-[#dcdefa] w-6 h-6 rounded-full p-1 m-2'
          onClick={(e) => addProductsToCart(e, product)}>
          <PlusIcon className="h-6 w-6 text-black"/>
        </div>
      );
    }
    
  };

  return (
    <div 
    className='bg-white cursor-pointer w-50 h-80 rounded-lg p-4'
    onClick={() => showProduct(product)}>
      <figure className='relative w-full h-3/5 mb-2 p-4'>
        <img className='w-full h-full' src={product.image} alt='product' />
        {renderIcon(product.id)}
      </figure>
      <p className='text-sm font-light pb-2'>{product.title}</p>
      <p className='text-lg font-medium pb-2 text-black'>${product.price}</p>
    </div>
  )
}

export default Card
