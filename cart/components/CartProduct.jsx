import { FiX } from 'react-icons/fi'

import { parseCurrency } from '../../product/utilities'
import ProductQuantity from '../../product/components/ProductQuantity'

const CartProduct = ({
  id,
  img,
  title,
  description,
  removeProduct,
  addProduct,
  quantity,
  totalPrice,
}) => {
  return (
    <div className="cart-product">
      <div className="cart-product_info">
        <img alt={title} src={img} />

        <div className="cart-product_names">
          <h3 className="cart-product_title">{title}</h3>
          <p className="cart-product_description">{description}</p>
        </div>
      </div>

      <div className="cart-product_right-content">
        <div className="cart-product_product-quantity">
          <ProductQuantity
            handleDecrement={() => removeProduct(id, 1)}
            handleIncrement={() => addProduct(id, 1)}
            qty={quantity}
          />
        </div>
        <div className="product_price">{parseCurrency(totalPrice)}</div>
        <button
          className="cart-product_remove"
          type="button"
          onClick={() => removeProduct(id)}
        >
          <FiX />
        </button>
      </div>
    </div>
  )
}

export default CartProduct
