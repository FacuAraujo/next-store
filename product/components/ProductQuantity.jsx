const ProductQuantity = ({qty, setQty}) => {
    const incrementQty = () => setQty((current) => current + 1);

    const decrementQty = () => {
        if (qty === 1) return;

        setQty((current) => current - 1);
    };

    return (
        <div className="product-quantity">
            <button className="product-quantity_button" onClick={decrementQty}>
                -
            </button>
            <input type="number" className="product-quantity_val" value={qty} readOnly />
            <button className="product-quantity_button" onClick={incrementQty}>
                +
            </button>
        </div>
    );
};

export default ProductQuantity;
