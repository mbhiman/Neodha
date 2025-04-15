import React from 'react';
import logo from '../../src/assets/images/logo.svg'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container p-2">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="zerodha-logo" style={{ width: '25%' }} />
                </a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form role='search' className="d-flex">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Support</a>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className=''><i class="fa fa-bars" aria-hidden="true"></i></div>

            </div>
        </nav>
    );
}

export default Navbar;