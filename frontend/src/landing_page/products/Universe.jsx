import React from 'react';
import { Link } from 'react-router-dom';
import zerodhaFundhouse from '../../assets/images/zerodhaFundhouse.png';
import sensibullLogo from '../../assets/images/sensibullLogo.svg';
import tijoriLogo from '../../assets/images/tijoriLogo.svg';
import streakLogo from '../../assets/images/streakLogo.png';
import smallcaseLogo from '../../assets/images/smallcaseLogo.png';
import dittoLogo from '../../assets/images/dittoLogo.png';

function Universe() {
    return (
        <div className='container mt-5 p-5 mb-5'>
            <div className="row p-5 text-center">
                <h2>The Zerodha Universe</h2>
                <p className='mt-3 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col">
                    <Link to={"https://www.zerodhafundhouse.com/"}><img class='parter-logo' src={zerodhaFundhouse} alt="" /></Link>
                </div>
                <div className="col">
                    <Link to={"https://sensibull.com/"}><img class='parter-logo' src={sensibullLogo} alt="" /></Link>
                </div>
                <div className="col">
                    <Link to={"https://www.tijorifinance.com/"}><img class='parter-logo' src={tijoriLogo} alt="" /></Link>
                </div>
            </div>

            <div className='row text-center p-5'>
                <div className="col">
                    <Link to={"https://streak.tech/"}><img class='parter-logo' src={streakLogo} alt="" /></Link>
                </div>
                <div className="col">
                    <Link to={"https://smallcase.zerodha.com/"}><img class='parter-logo' src={smallcaseLogo} alt="" /></Link>
                </div>
                <div className="col">
                    <Link to={"https://joinditto.in/"}><img class='parter-logo' src={dittoLogo} alt="" /></Link>
                </div>
            </div>
            
            <div className='text-center mt-5'>
                <button className='btn btn-primary p-2 fs-5' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;