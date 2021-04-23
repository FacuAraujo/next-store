import { FiShoppingCart } from 'react-icons/fi'

const CartButton = ({ cart, setCartModalShow }) => {
  const cartLength = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <button className="button-cart" onClick={() => setCartModalShow((show) => !show)}>
      <div className="button-cart_quantity">{cartLength}</div>
      <FiShoppingCart />
    </button>
  )
}

export default CartButton
