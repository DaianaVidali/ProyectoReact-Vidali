import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'





const CartWidgetComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon= {faCartShopping} style={{color: "white"}} />
      <span style={{color:"white"}}>  0 </span>


    </div>
       

    
  )
}

export default CartWidgetComponent