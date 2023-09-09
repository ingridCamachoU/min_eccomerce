import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCardIndex = props => {

    const {id, title, image, price, handleDelete} = props;
    let renderXMarIcon

    if (handleDelete){
      renderXMarIcon = <XMarkIcon 
      className='h-5 w-5 text-black cursor-pointer'
      onClick={() => handleDelete(id)}/>
    }
  return (
    <div className='flex justify-between items-center py-4'>
       <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
            <img className='w-full h-full rounded-lg' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
       </div>

       <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {renderXMarIcon}
       </div>
    </div>
  );
}

export default OrderCardIndex;
