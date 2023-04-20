import React from 'react'
import QuantityField from '../QuantityField/QuantityField'
import Image from '../Image/Image'
import styles from './ProductShoppingCart.module.css'

const ProductShoppingCart = ({ prodCart, updateQuantity, input, setInputQuantity, products }) => {
    return (
        <div>

            <div className={styles.prodCartContainer}>

                <Image url={prodCart.url} />
                <div className={styles.prodCartInformation}>
                    <label>{prodCart.name}</label>
                    <br />
                    <label>{prodCart.description}</label>
                    <br />
                    <label>${prodCart.price}</label>

                    <QuantityField prodCart={prodCart} updateQuantity={updateQuantity} input={input} setInputQuantity={setInputQuantity} products={products}
                    />
                </div>
            </div>



        </div>

    )
}

export default ProductShoppingCart