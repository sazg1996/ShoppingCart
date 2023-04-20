import React from 'react'
import ProductList from '../ProductList/ProductList.jsx'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'
import SummaryDetail from '../SummaryDetail/SummaryDetail.jsx'
import CounterCart from '../CounterCart/CounterCart.jsx'
import styles from '../Shop/Shop.module.css'
import { useState } from 'react'
//const [ product,setProduct]=useState([]);
//const [editProduct, setEdit] = useState(null);
const products = 0




const Shop = ({ }) => {
  const [productL, setProductL] = useState([
    { id: 'lu', name: 'Nike Dunk High Retro', price: 120, quantity: 5, description: 'Really', url: 'https://cdn.shopify.com/s/files/1/0548/7362/0655/products/snakerstoreNike_Dunk_High_Black_Red-DB2179-003-0.png?v=1673878661' },
    { id: '2u', name: 'Nike Zoom Fly 5', price: 150, quantity: 3, description: 'good Nikeshoes', url: 'https://prochampions.vtexassets.com/arquivos/ids/635076/Nike-Zoom-Fly-5-Tenis_DM8968-001_02.jpg?v=638073999209330000' },
    { id: '3u', name: 'Nike Streetgato', price: 189, quantity: 2, description: 'Really Nike shoes', url: 'https://tiendavirtualfairplay.com/15402/zapatilla-nike-streetgato-futsala-negra.jpg', },
  ]);

  const [cart, setCart] = useState([]);
  const [summary, setSummary] = useState(0);
  const [input, setInputQuantity] = useState('');
  //const [totalQuantity, setTotalQuantity] = useState(0);
  const [inputDiscount, setInputDiscount] = useState(0);

  const addToCart = ({ id, name, price, description, url }) => {
    cart
    let productCartList;
    let available;
    available = productL.find(p => p.id === id);

    let exist = cart.find(x => x.id === id);
    let total = 0
    let totalQ = 0
    if (available.quantity > 0) {

      if (exist) {
        productCartList = cart.map(x => {
          return x.id === id ? { ...x, quantity: x.quantity + 1 } : x

        });

      } else {
        productCartList = [...cart, { id, name, price, description, url, quantity: 1 }];

      }

      setCart(productCartList)

      setProductL(
        productL.map(x =>
          x.id === id ? { ...x, quantity: x.quantity - 1 } : x
        )
      )


    }
  }



  const updateQuantity = (id, quantity) => {

    let total = 0
    let productSearch = { ...productL.find(p => p.id === id) };
    let cartProduct = { ...cart.find(x => x.id === id) };
    if (!quantity == 0) {
      if (quantity <= productSearch.quantity + cartProduct.quantity) {
        productSearch.quantity = (productSearch.quantity + cartProduct.quantity) - quantity


        setProductL(
          productL.map(product => {
            return product.id == id ? { ...product, quantity: productSearch.quantity } : product
          })
        )

        cartProduct.quantity = quantity

        setCart(
          cart.map(product => {
            return product.id == id ? { ...product, quantity: cartProduct.quantity } : product
          })

        )
      }
    } else if (quantity == 0) {
      setCart(cart.filter(product => product.id != id));
      setProductL(
        productL.map(product => {
          return product.id == id ? { ...product, quantity: productSearch.quantity + cartProduct.quantity } : product
        })
      )


    }


  }


  return (
    <div className={styles.shop}>
      <CounterCart totalQuantity={cart.reduce((total, x) => { return total + x.quantity }, 0)} />
      <ProductList addToCart={addToCart} products={productL} />
      <hr />
      <div className={styles.cart}>
        <div className={styles.box}>
          <ShoppingCart addToCart={addToCart} cart={cart} updateQuantity={updateQuantity} products={productL} />
        </div>
        <div className={styles.box}>
          <SummaryDetail subtotal={cart.reduce((total, x) => { return total + (x.price * x.quantity) }, 0)} />
        </div>
      </div>

    </div>

  )

}
export default Shop