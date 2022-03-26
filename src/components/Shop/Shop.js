import React, { useEffect, useState } from "react";
import './Shop.css';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Questions from "../Questions/Questions";
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setProduct] = useState([])
    const handleCartAdd = (product) => {
        const newProduct = [...cart, product];
        setProduct(newProduct);
    }
    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                        {
                            products.map(product => <Product product={product} key={product.id} handleCartAdd={handleCartAdd}></Product>)
                        }
                    </div>
                    <div className="mt-4">
                        <Questions></Questions>
                    </div>
                </div>
                <div className=" col-12 col-md-4 col-lg-3 text-start cart">
                    <Cart key={cart} cart={cart} products={products}></Cart>
                </div>
            </div>
        </div>
    )
}
export default Shop;