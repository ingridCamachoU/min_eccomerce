import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const OrdersCardIndex = props => {

    const {totalPrice, totalProducts, date} = props;

    const fecha = new Date(date);
    const day = fecha.getDate();
    const month = fecha.getMonth() + 1;
    const year = fecha.getFullYear();

  return (
    <div className='flex justify-between items-center py-4 border border-black w-80 p-4 rounded-lg mb-6'>
        <div className='flex justify-between w-full'>
            <div className=' flex flex-col'>
                <p className='flex gap-3 mb-2'>
                    <CalendarDaysIcon className="h-6 w-6 text-black cursor-pointer"/>
                    <span className='font-ligth'>{day}/{month}/{year}</span>
                </p>
                <p className='flex gap-2 mb-2'>
                    <ShoppingBagIcon className="h-6 w-6 text-black cursor-pointer"/>
                    <span className='font-ligth'>{totalProducts} artículos</span>
                </p>      
            </div>  
            <p className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>$ {totalPrice}</span>
                <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
            </p>           
        </div>
    </div>
  );
}

export default OrdersCardIndex;