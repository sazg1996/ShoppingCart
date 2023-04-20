import Image from "../Image/Image"
import Button from "../Button/Button";
import styles from './Product.module.css';
import { useState } from "react";

const Product = ({ prod,addToCart}) => {
    const handleAddtoCart = () => {
        addToCart(prod);
      }

    return (

        <ol>
            
                <Image url={prod.url} />
                <div>
                    <label>{prod.name}</label>
                    <br />
                    <label>${prod.price}</label>
                    <br />
                    <label>{prod.quantity}</label>
                    <br />
                </div>
                <Button execute={handleAddtoCart} disabled={prod.quantity==0}>
                Add product
                </Button>
            
        </ol>


    )

}
export default Product