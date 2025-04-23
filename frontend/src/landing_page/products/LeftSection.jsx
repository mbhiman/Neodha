import React from 'react';
import googlePlayBadge from '../../assets/images/googlePlayBadge.svg';
import appstoreBadge from '../../assets/images/appstoreBadge.svg';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className="row p-5">
                <div className="col-6 p-5" >
                    <img  src={imageURL} alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5 mt-5" >
                    <h1>{productName}</h1>
                    <p >{productDescription}</p>
                    <div className='mt-4 '>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"80px", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay}>
                        <img src={googlePlayBadge} alt="" />
                    </a>
                    <a href={appStore} style={{marginLeft:"40px"}}>
                        <img src={appstoreBadge} alt="" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;