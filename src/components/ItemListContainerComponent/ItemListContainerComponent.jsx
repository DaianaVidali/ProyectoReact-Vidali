
import React from 'react'
import "./ItemListContainerComponent.css"

const ItemListContainerComponent = ({greeting}) => {
    const customStyle={
        color:"white",
        fontSize:"2rem",
        margin:"auto",
        width:"100vw",
        height:"80vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"Center"

    };
  return (
    <div className="itemListContainer">{greeting}</div>
  );
};

export default ItemListContainerComponent