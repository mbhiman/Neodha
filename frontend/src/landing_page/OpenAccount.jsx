import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (  
        <div className="container p-5 mt-5 text-center">
            <h1 className='mb-4 fs-2'>Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to={'/signup'}><button className='mt-3 p-2 fs-5 btn btn-primary' style={{width:"20%", margin:"0 auto" }}>Sign up for free</button></Link>
        </div>
    );
}

export default OpenAccount;