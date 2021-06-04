import { useContext, useState } from 'react'

import AddToCart from '../components/AddToCart'
import ProductQuantity from '../components/ProductQuantity'
import CartContext from '../../context/CartContext'
import { parseCurrency } from '../utilities'

const Product = ({ product }) => {
  const [qty, setQty] = useState(1)
  const { addProduct } = useContext(CartContext)

  const { title, img, description, price } = product

  const handleIncrementQuantity = () => {
    setQty((current) => current + 1)
  }

  const handleDecrementQuantity = () => {
    setQty((current) => {
      if (current === 1) return current

      return current - 1
    })
  }

  return (
    <article className="product">
      <div className="product_content">
        <div className="product_image-wrapper">
          <img alt={title} height="150" src={img} width="150" />
        </div>
        <h2 className="product_title">{title}</h2>
        <p className="product_description">{description}</p>
        <p className="product_price">{parseCurrency(price)}</p>
      </div>

      <div>
        <div className="product_product-quantity-wrapper">
          <ProductQuantity
            handleDecrement={handleDecrementQuantity}
            handleIncrement={handleIncrementQuantity}
            qty={qty}
          />
        </div>

        <AddToCart handleClick={() => addProduct(product, qty)}>
          Agregar al carrito
        </AddToCart>
      </div>
    </article>
  )
}

export default Product
