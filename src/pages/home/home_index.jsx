import Layout from "../../components/layout/layout";
import front_page from '../../assets/front_page.svg'
import Product_detail from "../../components/product_detail/product_detail";
import ShowProducts from "../../components/show_products/show_products_index";

function Home() {
 
    return (
        
        <Layout>
            <div className="text-gray-500 font-light text-sm py-1 mt-2">ENVIOS GRATIS A PARTIR DE $230.000 *APLICA T & C*</div>
            <div className="w-full max-w-screen-xl flex justify-center mb-4">
                <img src={front_page} alt="front_page" className="w-full" />
            </div>
            
            <div className="flex w-80 items-center relative justify-center mt-4 mb-4">
                <h1 className="font-medium text-xl">Productos</h1>
            </div>

            <div className="grid gap-4  w-full max-w-screen-lg flex-wrap grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ShowProducts/>
            </div>   
            <Product_detail/> 
        </Layout>
    )
} 
  
  export default Home;