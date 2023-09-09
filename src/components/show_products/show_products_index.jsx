import { useUserContext } from "../../context/context_index";
import Card from "../card/card_index";
import searchError from '../../assets/searchError.svg';

const ShowProducts = () => {

    const { filteredProducts } = useUserContext();

    const renderView = () => {

        if(filteredProducts?.length > 0){
            return(
                filteredProducts?.map( product => (
                    <Card key={product.id} {...product}/>        
                ))  
            ) 
        }else{
            return(
                <div className="w-96 my-10 flex flex-col justify-center items-center ml-80">
                    <img  src={searchError} alt="searcError" className="w-1/3"/>
                    <h2 className="font-light w-full text-center">No hay publicaciones que coincidan con tu búsqueda.</h2>                   
                </div>
            )
        }
        
    };

  return renderView()
  
}

export default ShowProducts;
