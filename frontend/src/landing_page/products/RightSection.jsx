import React from 'react';

function RightSection({ imageURL, productName, productDescription, link}) {
    return (
        <div className="container">
            <div className="row p-5 ms-5">
                <div className="col-5 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='mt-4 mb-4'>{productDescription}</p>
                    <a href={link} style={{textDecoration:"none"}} >{link}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;