import React from 'react'
import { getProductById } from '../services/products';

export const useProductsById = (id) => {
    const[product, setProducts] = React.useState([]);
    React.useEffect(()=>{
        getProductById(id)
          .then((response) =>{
            setProducts(response.data);
        })
          .catch((error)=>{
            console.error(error);
          });
    }, []);
    return {product}
};

