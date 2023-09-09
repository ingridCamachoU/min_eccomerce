import { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart - Increment quantity
    const [count, setCount ] = useState(JSON.parse(localStorage.getItem('count')) || 0);

    const saveLocalCountShopping = () =>{
        localStorage.setItem('count', JSON.stringify(count));
    };
    saveLocalCountShopping();

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

     // Checkout Side Menu - Open/Close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail - Show product 
    const [productToShow, setProductToShow] = useState({});
    
    // Shopping Cart - Add/delete products to cart
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cartProducts')) || []);

    const saveLocalCartProducts = () =>{
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    };
    saveLocalCartProducts();

    const incrementCount = () => {
        setCount(count+1);
    };

    const reduceCount = () => {
        setCount(count-1);
    };

    //shopping Cart - Order
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);

    const saveLocalOrder = () =>{
        localStorage.setItem('order', JSON.stringify(order));
    };
    saveLocalOrder();

    // Get products
    const [products, setProducts ] = useState(null);
    const [filteredProducts,  setFilteredProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then( response => response.json())
        .then( data => setProducts(data))
    }, []);

     // Get products by title
    const [searchByTitle, setSearchByTitle ] = useState(null);

    // Get products by Category
    const [searchByCategory, setSearchByCategory ] = useState(null);

    const saveLocalSearchByCategory = () =>{
        localStorage.setItem('category', JSON.stringify(searchByCategory));
    };
    saveLocalSearchByCategory();
  
    const filteredProductsByTitle = (products, searchByTitle) => {
        return products?.filter( product => product.title.toLowerCase().includes(title.toLowerCase()))
    };
  
    const filterBy =  (data, searchType, products, searchByTitle) => {

        if (searchType === 'BY_TITLE') {
            return filteredProductsByTitle(products, searchByTitle);
        }
        if (searchType === 'BY_CATEGORY') {
            return data;
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return data.filter( product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }
        if (!searchType) {
            return products;
        }
    };

 
    useEffect( () => {
    
        fetch(`https://fakestoreapi.com/products/category/${
            searchByCategory}`)
        .then( response => response.json())
        .then(data => {
            if (searchByTitle && searchByCategory) setFilteredProducts( filterBy(data, 'BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
            if (searchByTitle && !searchByCategory) setFilteredProducts( filterBy(data, 'BY_TITLE', products, searchByTitle, searchByCategory))
            if (!searchByTitle && searchByCategory) setFilteredProducts( filterBy(data, 'BY_CATEGORY', products, searchByTitle, searchByCategory))
            if (!searchByTitle && !searchByCategory) setFilteredProducts( filterBy(data, null, products, searchByTitle, searchByCategory))
        })
    
    }, [products, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount, 
            incrementCount,
            reduceCount, 
            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder, 
            products,
            setProducts, 
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>      
    )
}

export const useUserContext = () => useContext(ShoppingCartContext);