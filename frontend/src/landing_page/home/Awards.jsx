import React from 'react';
import largestBroker from '../../assets/images/largestBroker.svg';
import pressLogos from '../../assets/images/pressLogos.png'

function Awards() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-4'>
                    <img src= {largestBroker} alt="largest-broker-image" />
                </div>

                <div className='col-6 mt-5'>
                    <h1 >Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retailer order <br/>
                        volumes in India daily by trading and investing in:
                    </p>

                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li> <p>Features and Options</p> </li>
                                <li> <p>Commodity derivatives</p> </li>
                                <li> <p>Currency derivatives</p> </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li> <p>Strocks & IPOs</p> </li>
                                <li> <p>Direct Mutuals Funds</p> </li>
                                <li> <p>Bonds and Govt. Securities</p> </li>
                            </ul>
                        </div>
                        <img src= {pressLogos} alt="Press-Logos" style={{width: "90%"}} className='mt-4' />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Awards;