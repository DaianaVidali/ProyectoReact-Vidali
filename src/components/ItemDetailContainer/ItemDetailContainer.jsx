import React from 'react'

const ItemDetailContainer = ({product}) => {
  return (
    <div>
        <div style={{display:"flex"}}>
          {product.images && product.images.length > 0 ? product.images.map((image, index)=>{
            return <img key={index} src={image} alt={product.title} style={{width: 120, height:120}}/>
          }) : null}
       </div>  

       <div style={{display:"flex", flexDirection:"column", marginLeft:150 }}>   
         <h1>{product.title}</h1>
         <p>{product.description}</p>
         <p>{product.price}</p>
       </div>   
    </div>
  );
};

export default ItemDetailContainer