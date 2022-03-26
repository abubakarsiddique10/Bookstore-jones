import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <header>
            <nav class="container navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand fs-3" href="#">Bookstore Jones</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                            <li class="nav-item">
                                <a aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Order</a>
                            </li>
                            <li class="nav-item">
                                <a href="">Inventory</a>
                            </li>
                            <li class="nav-item">
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