import React from 'react';
import pricingEquity from '../../assets/images/pricingEquity.svg';
import intradayTrades from '../../assets/images/intradayTrades.svg';

function Hero() {
    return (
        <div className="container text-center p-5">
            <div className="row p-5">
                <h1>Charges</h1>
                <p className='text-muted mt-3'>List of all charges and taxes</p>
            </div>

            <div className="row p-5">
                <di className="col-4">
                    <img class="equity-trades" src={pricingEquity} alt="" />
                    <h3>Free equity delivery</h3>
                    <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </di>
                <div className="col-4 ">
                    <img class="equity-trades" src={intradayTrades} alt="" />
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img class="equity-trades" src={pricingEquity} alt="" />
                    <h3>Free direct MF</h3>
                    <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;