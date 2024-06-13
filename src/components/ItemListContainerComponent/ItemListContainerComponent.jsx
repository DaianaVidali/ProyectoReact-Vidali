import React from 'react'

const ItemListContainerComponent = ({greeting}) => {

  const customStyles={color:"white", fontSize:"2rem"};

  return (
    <div style={customStyles}>{greeting}</div>
  )
}

export default ItemListContainerComponent