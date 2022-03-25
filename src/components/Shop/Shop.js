import React, { useEffect, useState } from "react";
import './Shop.css';
import Products from "../Products/Products";
const Shop = () => {
    const [products, setProducts] = useState([]);
    /* console.log(products) */
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container border">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                        {
                            products.map(product => <Products product={product} key={product.id}></Products>)
                        }
                    </div>
                </div>
                <div className="col-12 col-md-3 text-end">
                    <h3>Selected Books</h3>
                    <button>CHOOSE 1 FORE ME</button>
                    <button>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    )
}
export default Shop;