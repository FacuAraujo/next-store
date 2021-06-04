const ProductQuantity = ({ qty, handleIncrement, handleDecrement }) => {
  return (
    <div className="product-quantity">
      <button className="product-quantity_button" onClick={handleDecrement}>
        -
      </button>
      <input
        readOnly
        className="product-quantity_val"
        type="number"
        value={qty}
      />
      <button className="product-quantity_button" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default ProductQuantity
