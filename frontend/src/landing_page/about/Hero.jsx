import React from 'react';
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className="container p-5">
            <h1 className='p-5 text-center fs-2 border-bottom mb-5'>We pioneered the discount broking model in India.<br />
                Now, we are breaking ground with our technology.</h1>

            <div className="row p-5">
                <div className="col ms-5">
                    <p className='p-3'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p className='p-3'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p className='p-3'> Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, 
                        contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col ms-5">
                   <p className='p-3'> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p className='p-3'> <Link to={'https://rainmatter.com/'} style={{textDecoration: "none"}}>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className='p-3'>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to={'https://zerodha.com/z-connect'} style={{textDecoration: "none"}}>blog</Link> or see what the media is <Link to={'https://zerodha.com/media'} style={{textDecoration: "none"}}>saying about us.</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;