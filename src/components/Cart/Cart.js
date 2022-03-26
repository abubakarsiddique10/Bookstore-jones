import React from "react";
import './Cart.css';
const Cart = (props) => {
    const removeItems = () => {
        document.getElementsByClassName('items')[0].innerHTML = '';
    }
    return (
        <div className="cart">
            <h5 className="mb-3">Selected Books</h5>
            <div className="items">
                {
                    props.cart.map(product => <div className="border border-primary rounded mb-2 d-flex align-items-center py-1 px-2">
                        <img className="img" src={product.img}></img>
                        <h6 className="pe-2 mb-0">{product.name}</h6>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>)
                }
            </div>
            <button className="bg-primary text-white mb-3 px-3 py-2">CHOOSE 1 FORE ME</button><br />
            <button onClick={() => removeItems()} className="bg-primary text-white mb-3 px-3 py-2">CHOOSE AGAIN</button>
        </div>
    )
}
export default Cart;