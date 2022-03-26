import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <header>
            <nav className="container navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="#">Bookstore Jones</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <a aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Order</a>
                            </li>
                            <li className="nav-item">
                                <a href="">Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a href="">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;