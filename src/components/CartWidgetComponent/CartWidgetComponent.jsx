import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidgetComponent = () => {
  const customStyle={
    color:"white", 
    fontSize:"1.2rem", 
    marginRight:"0.5rem"
  };

  return (
    <>
     <FontAwesomeIcon icon={faCartShopping}style={customStyle} />
     <span style={customStyle}>0</span>
    </>
  );
};

export default CartWidgetComponent


