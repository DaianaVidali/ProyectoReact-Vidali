import React from 'react'

const ItemDetailContainer = ({product}) => {
  return (
    <div>
        {product.images.map((image, index)=>{
          return <img key= {index} src={image} alt={product.title}/>
        })}
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>

    </div>
  );
};

export default ItemDetailContainer