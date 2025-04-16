import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.svg'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container p-2">
                <Link class="navbar-brand ms-5" to={'/'}>
                    <img src={logo} alt="zerodha-logo" style={{ width: '25%' }} />
                </Link>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form role='search' className="d-flex">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/signup'}>Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/product'}>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/pricing'}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/support'}>Support</Link>
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