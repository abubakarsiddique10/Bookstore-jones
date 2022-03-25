import React from "react";
import './Products.css';
const Products = (props) => {
    const { img, name, id, price } = props.product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="book-img mx-auto img-fluid"></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                </div>
                <div className="card-footer text-center">
                    <small className="text-muted">ADD TO CART <i class="fa-solid fa-cart-shopping text-black"></i></small>
                </div>
            </div>
        </div>
    )
}
export default Products;