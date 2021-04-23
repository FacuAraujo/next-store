import React, { useContext, useState } from 'react'

import api from '../product/api'
import CartContext from '../context/CartContext'
import Product from '../product/components/Product'
import CartModal from '../cart/components/CartModal'
import CartButton from '../cart/components/CartButton'
import PageTitle from '../components/PageTitle'
import Alert from '../components/Alert'

const IndexRoute = ({ products }) => {
  const [showCartModal, setCartModalShow] = useState(false)

  const { cart, alerts, removeAlert } = useContext(CartContext)

  return (
    <main>
      <div className="alerts-wrapper">
        {alerts.length > 0 &&
          alerts.map((alert) => (
            <Alert key={alert.id} removeAlert={removeAlert} {...alert} />
          ))}
      </div>

      <PageTitle>Mi Tienda</PageTitle>
      <section className="products">
        <div className="container">
          <div className="products-wrapper">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <CartButton cart={cart} setCartModalShow={setCartModalShow} />
      )}

      {showCartModal && <CartModal setShowModal={setCartModalShow} />}
    </main>
  )
}

export const getStaticProps = async () => {
  const products = await api.list()

  return {
    props: {
      products,
    },
    revalidate: 43200,
  }
}

export default IndexRoute
