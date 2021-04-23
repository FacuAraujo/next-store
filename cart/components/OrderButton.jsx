import { useMemo, useContext } from 'react'

import { parseCurrency } from '../../product/utilities'
import CartContext from '../../context/CartContext'

const OrderButton = () => {
  const { cart, total } = useContext(CartContext)

  const msgText = useMemo(() => {
    return cart
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.title} (x${product.quantity}) - ${parseCurrency(
              product.totalPrice
            )}\n`
          ),
        ''
      )
      .concat(`\nTotal: ${parseCurrency(total)}`)
  }, [cart, total])

  return (
    <a
      className="add-to-cart checkout"
      href={`https://wa.me/5491154900755?text=${encodeURIComponent(msgText)}`}
      rel="noreferrer"
      target="_blank"
    >
      Finalizar pedido
    </a>
  )
}

export default OrderButton
