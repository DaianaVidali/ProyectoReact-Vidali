import React from 'react'
import { getProductById } from '../services/products';

export const useProductsById = (id) => {
    const[product, setProduct] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    React.useEffect(()=>{
        getProductById(id)
          .then((response) =>{
            setProduct(response.data);
        })
          .catch((error)=>{
            setError(true);
          })
          .finally (() =>{
            setLoading(false);
          });
    }, [id]);
    return {product, loading};
};
