import React from "react";
import './Cart.css';
const Cart = (props) => {
    return (
        <div className="cart">
            <h5 className="mb-3">Selected Books</h5>
            <div>
                {
                    props.cart.map(product => <h5>{product.name}</h5>)
                }
            </div>
            <button className="bg-primary text-white mb-3 px-3 py-2">CHOOSE 1 FORE ME</button><br />
            <button className="bg-primary text-white mb-3 px-3 py-2">CHOOSE AGAIN</button>
        </div>
    )
}
export default Cart;