const ItemListContainerComponent = ({ greeting }) => {
   const customStyles = {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     color: "white",
     fontSize: "2rem",
     margin: "auto",
     width: "100vw",
     height: "80vh",
   };
 
 
   return <div className="itemListContainer">{greeting}</div>;
 };
 
 export default ItemListContainerComponent;