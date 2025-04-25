import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="container-fluid mb-5" id='supportHero'>
            <div className='p-5 me-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <Link to={''} >Track Tickets</Link>
            </div>
            <div className="row ms-5">
                <div className="col" id='supportColumn'>
                    <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                    <input type="text" placeholder='Eg: how do I activate F&O, why is my order getting rejected ...' /> <br />
                    <div className='mt-3 mb-5'>
                        <Link className='me-4'>Track account opening</Link>
                        <Link className='me-4'>Track segment activation</Link>
                        <Link className='me-4'>Intraday margins</Link>
                        <Link className='me-4'>Kite user manual</Link>
                    </div>
                </div>
                <div className="col mt-5 ms-3" >
                    <h5 className='mb-3'>Featured</h5>
                    <ol>
                        <li><Link><p>Latest Intraday leverages and Square-off timings</p></Link></li>
                        <li><Link><p>Rights Entitlements listing in April 2025</p></Link></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;