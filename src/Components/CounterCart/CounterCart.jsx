import logo from '../../assets/carrito.png'
import styles from './CounterCart.module.css'
const CounterCart = ({totalQuantity}) => {
  return (
    <div className={styles.CountertContainer} >
         <img src={logo} alt="Logo" /><p> {totalQuantity} </p>
    </div>
  )
}
export default CounterCart