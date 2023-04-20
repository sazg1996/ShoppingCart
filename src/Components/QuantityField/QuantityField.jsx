import React, { useState } from 'react'
import { useEffect } from 'react';
import Product from '../Product/Product';

export const QuantityField = ({ prodCart, updateQuantity, products }) => {

  const [quantityValue, setQuantityValue] = useState(prodCart.quantity);

  useEffect(() => {
    setQuantityValue(prodCart.quantity);
  }, [prodCart.quantity]);


  const handlerInput = ({ target }) => {
    const maximum = products.find(p => p.id === prodCart.id);

    const newQuantity = parseInt(target.value);
    console.log("new", newQuantity)
    if (newQuantity > maximum.quantity + prodCart.quantity) {
      setQuantityValue(maximum.quantity + prodCart.quantity);

    }
    else {

      setQuantityValue(target.value);
      updateQuantity(prodCart.id, newQuantity)
    }



  }

  return (
    <div><input type='number' value={quantityValue} onChange={handlerInput} /></div>
  )
}
export default QuantityField
