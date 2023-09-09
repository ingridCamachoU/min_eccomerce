import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";
import OrdersCardIndex from "../../components/orders_card/orders_card.index";
import { useUserContext } from "../../context/context_index";

function MyOrders() {

  const {order} = useUserContext();

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mt-4 mb-4">
        <h1 className="font-medium text-xl">My orders</h1>
      </div>
      
      {
        order.map( (order, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
            <OrdersCardIndex  
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts}
            date={typeof order.date === 'string' ? new Date(order.date) : order.date} />
          </Link>
        ))
      }
  
    </Layout>
  )
}

export default MyOrders;