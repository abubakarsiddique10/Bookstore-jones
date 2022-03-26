import React from "react";
import './Cart.css';
const Cart = (props) => {
    const removeItems = () => {
        document.getElementsByClassName('items')[0].innerHTML = '';
    }
    const randomNumber = (random) => {
        console.log(random)
        let match = props.products.find(p => p.id == random);
        let addedItem = document.getElementsByClassName('added-items')[0];
        addedItem.innerHTML = "";
        addedItem.innerHTML = `
        <div class="border border-primary rounded mb-3 d-flex align-items-center py-1 px-2">
        <img style="width: 40px; height: 40px; border-radius:50%;" src=${match.img}>
        <h6 class="mx-2">${match.name}</h6>
        <i class="fa-solid fa-trash-can"></i>
        </div>
        `
    }
    return (
        <div className="cart">
            <h5 className="mb-3">Selected Books</h5>
            <div className="items added-items">
                {
                    props.cart.map(product => <div className="border border-primary rounded mb-2 d-flex align-items-center py-1 px-2">
                        <img className="img" src={product.img}></img>
                        <h6 className="pe-2 mb-0">{product.name}</h6>
                        <i className="fa-solid fa-trash-can"></i>
                    </div>)
                }
            </div>
            <button onClick={() => randomNumber(Math.floor(Math.random() * 11))} className="bg-primary text-white mb-3 px-3 py-2">CHOOSE 1 FORE ME</button><br />
            <button onClick={() => removeItems()} className="bg-primary text-white mb-3 px-3 py-2">CHOOSE AGAIN</button>
        </div>
    )
}
export default Cart;