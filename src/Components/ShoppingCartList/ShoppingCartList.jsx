import ProductShoppingCart from "../ProductShoppingCart/ProductShoppingCart"
import QuantityField  from "../QuantityField/QuantityField"
const ShoppingCartList=({addToCart,cart,updateQuantity,input,setInputQuantity,products})=>{
   
    return (
      
        <div>
            {cart.map(productCart=>(
            <ProductShoppingCart 
                key={`product-cart:${cart.id}`} 
                addToCart={addToCart} 
                prodCart={productCart} 
                updateQuantity={updateQuantity} input={input} setInputQuantity={setInputQuantity} products={products}/>
            ))}

            
     </div>
            
    )
}
export default ShoppingCartList