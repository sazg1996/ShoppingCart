import React from 'react'
import styles from './SummaryDetail.module.css'
import { useState } from 'react';
export const SummaryDetail = ({subtotal}) => {
  const [discount, setDiscount] = useState(0);

  const handleInputChange = ({target}) => {
    setDiscount(target.value);
  };

  return (
    <div className={styles.summary}>
      <h3>Summary</h3>
      <br/>
      <label>ENTER COUPON:</label><input type='number' min='1' placeholder='Discount' value={discount} onChange={handleInputChange} max='100' />
      <label>SUBTOTAL:</label><p>${subtotal}</p>
      <label>SHIPPING:</label><p>Free</p>
      <label>COUPON:</label><p>${discount}</p>
      <label>TOTAL:</label><p>${subtotal - discount}</p>
    </div>
  )
}
export default SummaryDetail
