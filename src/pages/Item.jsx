import React from 'react'

import { useProductsById } from '../hooks/useProductsById'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Item = () =>{
  const {id} = useParams()
  const {product, loading} = useProductsById(id);
  return loading ? <LoaderComponent /> : <ItemDetailContainer product={product}/>
  
};

export default Item