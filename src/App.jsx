import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBarComponent from './components/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  

  return  (
    <>
      <NavBarComponent/>
      <ItemListContainerComponent greeting="Bienvenidos a Morena. Estamos trabajando para que tenga una mejor experiencia"/>
      

    </>
  ) 
   
}

export default App