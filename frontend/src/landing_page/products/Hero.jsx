import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className="text-center mt-5 p-3">
                <h1>Zerodha Products</h1>
                <p className='text-muted fs-4'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-5'>Check out our <Link style={{ textDecoration: "none" }} to={'https://zerodha.com/investments'}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </p>
            </div>
        </div>
    );
}

export default Hero;