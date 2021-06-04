import React, { useState, useMemo } from 'react'

const context = React.createContext({ message: 'empty' })

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [alerts, setAlerts] = useState([])

  // Alerts
  const addAlert = (success, text) =>
    setAlerts([...alerts, { id: alerts.length + 1, text, success }])

  const removeAlert = (id) =>
    setAlerts((current) => current.filter((x) => x.id !== id))

  // Cart
  const addProduct = (product, qty) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex((item) => item.id === product.id)

      if (index >= 0) {
        addProductQuantity(product.id, qty, index)

        return
      } else {
        product.quantity = qty
        product.totalPrice = product.price * product.quantity

        return currentCart.concat(product)
      }
    })

    addAlert(true, `${qty} ${product.title} se ha agregado al carrito`)
  }

  const addProductQuantity = (id, qty, cartIndex) => {
    setCart((currentCart) => {
      const index = cartIndex || currentCart.findIndex((item) => item.id === id)

      currentCart[index].quantity = currentCart[index].quantity + qty
      currentCart[index].totalPrice =
        currentCart[index].price * currentCart[index].quantity

      return [...currentCart]
    })
  }

  const removeProduct = (id, qty) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex((item) => item.id === id)

      if (qty && currentCart[index].quantity > 1) {
        currentCart[index].quantity = currentCart[index].quantity - qty
        currentCart[index].totalPrice =
          currentCart[index].price * currentCart[index].quantity

        return [...currentCart]
      } else {
        return currentCart.filter((product) => product.id !== id)
      }
    })
  }

  const cartTotalPrice = useMemo(() => {
    return cart.reduce((total, product) => total + product.totalPrice, 0)
  }, [cart])

  return (
    <context.Provider
      value={{
        cart,
        total: cartTotalPrice,
        alerts,
        removeAlert,
        addProduct,
        addProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default context
