import React from 'react';
import education from '../../assets/images/education.svg'

function Education() {
    return (  
        <div className='container p-5 mt-4'>
            <div className="row">
                <div className="col">
                    <img src={education} alt="" />
                </div>
                
                <div className="col">
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world <br />covearing everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>

                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in <br />India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}> TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>

                </div>
            </div>

        </div>
    );
}

export default Education;