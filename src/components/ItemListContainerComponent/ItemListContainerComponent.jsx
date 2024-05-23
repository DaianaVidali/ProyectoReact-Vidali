import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
 const customStye = {
    color: "white",
    fontSize: "2rem",
    margin: "auto",
    width: "100vw",
    height:"100vh",
    display: "flex",
    justifyContent: "center",
 };
    return (
    <div style={customStye}>{greeting} </div>
  )
}

export default ItemListContainerComponent