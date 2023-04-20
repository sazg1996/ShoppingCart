import Product from "../Product/Product"
import styles from './ProductList.module.css';

const ProductList=({addToCart,products})=>{

return (
 
        <div className={styles.productList}>
            {products.map(product=>(
                <Product
                  key={`product-item-${product.id}`}
                  prod={product} 
                  addToCart={addToCart}/>
                
            ) )} 
            
        </div>
)
            }
export default ProductList