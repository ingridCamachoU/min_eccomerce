import Layout from "../../components/layout/layout";
import Product_detail from "../../components/product_detail/product_detail";
import ShowProducts from "../../components/show_products/show_products_index";
import { useUserContext } from "../../context/context_index";
import electronics from '../../assets/electronics.jpg';
import jewelery from '../../assets/jewelery.jpeg';
import woman from '../../assets/woman.jpeg';
import men from '../../assets/men.jpeg';

const CategoryProduct = () => {
    
    const { searchByCategory } = useUserContext()

    function imgSearch(searchByCategory){

        switch (searchByCategory) {
        case "electronics":
        return <img src={electronics} alt="" />

        case "women's clothing":
            return <img src={woman} alt="" />

        case "men's clothing":
            return <img src={men} alt="" />

        case "jewelery":
            return <img src={jewelery} alt="" />
        }     
    }

    return (

        <Layout>
            <div className="w-full max-w-screen-xl flex justify-center mb-4">
                {
                    imgSearch(searchByCategory)
                }
            </div>
            <div className="flex w-80 items-center relative justify-center mt-4 mb-4">
                <h1 className="font-medium text-xl">Nuestros Productos</h1>
            </div>

            <div className="grid gap-4  w-full max-w-screen-lg flex-wrap grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ShowProducts />
            </div>   
            <Product_detail /> 
        </Layout>
    );
}

export default CategoryProduct;
