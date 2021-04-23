import { useEffect, useRef, useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { TweenMax, TimelineLite, Power3 } from 'gsap'

import { parseCurrency } from '../../product/utilities'
import CartContext from '../../context/CartContext'

import CartProduct from './CartProduct'
import OrderButton from './OrderButton'

const CartModal = ({ setShowModal }) => {
  const { cart, total, removeProduct } = useContext(CartContext)
  let modalRef = useRef(null)

  useEffect(() => {
    // Remove body scroll
    document.body.style.overflowY = 'hidden'

    // GSAP
    const tlEnter = new TimelineLite()
    const modalBox = modalRef.children[1]

    TweenMax.to(modalRef, 0, { css: { visibility: 'visible' } })

    tlEnter
      .from(modalRef, { opacity: 0, duration: 0.5, ease: Power3.easeInOut })
      .from(modalBox, { scale: 0, ease: Power3.easeInOut, duration: 0.8 }, 0.2)

    return () => (document.body.style.overflowY = 'auto')
  }, [])

  const handleCloseModal = () => {
    const tlOut = new TimelineLite()
    const modalBox = modalRef.children[1]

    tlOut
      .to(modalBox, { scale: 0, ease: Power3.easeInOut, duration: 0.8 })
      .to(modalRef, { opacity: 0, duration: 0.5, ease: Power3.easeInOut }, 0.5)

    setTimeout(() => setShowModal(false), 1000)
  }

  return (
    <div ref={(el) => (modalRef = el)} className="modal-bg">
      <div className="modal-close-full" onClick={handleCloseModal} />
      <div className="cart-modal_wrapper">
        <button className="cart-modal_close" onClick={handleCloseModal}>
          <FiX />
        </button>
        <div className="cart-modal_title">
          <h2>Carrito</h2>
        </div>

        {cart.map((cartItem) => (
          <CartProduct
            key={cartItem.id}
            {...cartItem}
            removeProduct={removeProduct}
          />
        ))}

        <div className="cart-modal_total">Total: {parseCurrency(total)}</div>

        <OrderButton />
      </div>
    </div>
  )
}

export default CartModal
