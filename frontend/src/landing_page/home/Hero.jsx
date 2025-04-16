import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/homeHero.png';

function Hero() {
    return ( 
        <div className='container p-5 '>
            <div className='row text-center p-2'>
                <img src={heroImage} alt="Investing platform" className='mb-5 d-block mx-auto' style={{width:"70%"}} />
                
                <h1 className='mt-2'>Invest in everything</h1>
                <p className='fs-5 mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to={'/signup'} ><button className='p-2 mt-4 btn btn-primary fs-5 mb-2' style={{width: "20%", margin: "0 auto" }}>Sign up for free</button></Link>
            </div>
        </div>
    );
}

export default Hero;