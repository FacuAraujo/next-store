import { FiX } from 'react-icons/fi'

import { parseCurrency } from '../../product/utilities'

const CartProduct = ({
  id,
  img,
  title,
  description,
  removeProduct,
  quantity,
  totalPrice,
}) => (
  <div className="cart-product">
    <div className="cart-product_info">
      <img alt={title} src={img} />

      <div className="cart-product_names">
        <h3 className="cart-product_title">{title}</h3>
        <p className="cart-product_description">{description}</p>
      </div>
    </div>

    <div className="cart-product_right-content">
      <div className="cart-product_quantity">
        Cantidad:
        {quantity}
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

export default CartProduct
