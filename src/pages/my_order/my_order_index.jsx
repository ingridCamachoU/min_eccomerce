import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";
import OrderCardIndex from "../../components/oder_card/order_card_index";
import { useUserContext } from "../../context/context_index";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {

    const {order} = useUserContext();

    /*const currerPath = window.location.pathname;
    let index = currerPath.substring(currerPath.lastIndexOf('/') + 1);
    if (index === 'last') index = order?.length - 1*/

    let { orderId } = useParams();
    if (!orderId) {
        orderId = order.length - 1
    }

    const latestOrderProducts = order?.[orderId]?.products || [];

    return (
      <Layout>
        <div className="flex w-80 items-center justify-center my-4">
        <Link to='/my-orders' className="left-0 cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        
        <div className="flex w-80 items-center relative justify-center mt-4 mb-4">
            <h1 className="font-medium text-xl">My orders</h1>
        </div>
  
      </div>
        <div className='flex flex-col w-80'>
        {
            latestOrderProducts.map((product) => (
                <OrderCardIndex 
                key={product.id}
                id={product.id}
                title={product.title} 
                image={product.image} 
                price={product.price}/>
            ))
        }
        </div>
      </Layout>
    )
  }
  
  export default MyOrder;