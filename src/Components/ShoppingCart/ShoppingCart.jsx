import ShoppingCartList from "../ShoppingCartList/ShoppingCartList";

const ShoppingCart=({addToCart,cart, updateQuantity,input,setInputQuantity,products})=>{
   
    return (
        <div>
    <ShoppingCartList addToCart={addToCart} 
        cart={cart} 
        updateQuantity={updateQuantity} input={input} setInputQuantity={setInputQuantity} products={products}/>
     </div>
        
    )

}
export default ShoppingCart