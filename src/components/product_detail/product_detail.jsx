import { XMarkIcon } from '@heroicons/react/24/solid'
import { useUserContext } from '../../context/context_index';

const Product_detail = () => {

    const {isProductDetailOpen, closeProductDetail, productToShow} = useUserContext();

  return (
        <aside 
        className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[460px] py-2 px-5 h-full top-0 mt-[120px] flex-col fixed bg-white right-0 border border-gray-400`}>
            <div className="flex justify-between items-center">
                <h2 className="font-meduim text-2xl mb-2">Detalles</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={closeProductDetail}/>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                className='w-full h-full rounded-lg' 
                src={productToShow.image} 
                alt={productToShow.title} />
            </figure>   
            <p className='flex flex-col p-6 gap-2'>
                <span className='font-medium text-2xl mb-2'>$ {productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>  
        </aside>
    )
}

export default Product_detail;
