import React from 'react';

function Pricing() {
    return (  
        <div className='container'>
            <div className='row ms-4 p-5'>
                <div className="col-6">
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges</p>
                    <a href="" style={{ textDecoration: "none" }}>
                            See pricing {" "}
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>Freee equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-3' >₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Pricing;