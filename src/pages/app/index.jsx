import {useRoutes, BrowserRouter} from 'react-router-dom';
import { ShoppingCartProvider } from '../../context/context_index';
import Home from '../home/home_index';
import CategoryProduct from '../category_product/category_product';
import MyAccount from '../my_account/my_account_index';
import MyOrder from '../my_order/my_order_index';
import MyOrders from '../my_orders/my_orders_index';
import NotFound from '../not_found/not_found_index';
import SignIn from '../sign_in/sign_in_index';
import CheckoutSideMenu from '../../components/checkout_side_menu/checkout_side_menu_index';
import Navbar from '../../components/navbar/navbar_index';

import './App.css'; 

const AppRoutes = () => {
  let routes = useRoutes([
    
    { path: '/', element: <Home /> },
    { path: '/electronics', element: <CategoryProduct /> },
    { path: '/woman', element: <CategoryProduct /> },
    { path: '/jewelery', element: <CategoryProduct /> },
    { path: '/men', element: <CategoryProduct /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  
  return routes;
}

const App = () => {

  return (

    <ShoppingCartProvider>
      <BrowserRouter>

        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />

      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App;
