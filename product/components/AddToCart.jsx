const AddToCart = ({handleClick, children}) => (
    <button className="add-to-cart" onClick={handleClick}>
        {children}
    </button>
);

export default AddToCart;
