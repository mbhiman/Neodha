import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return (
        <div className='container'>
            <div className="row ms-5">
                <h4 className='text-muted ms-5'>To create a ticket, select a relevant topic</h4>
                <div className="col-4 p-5" >
                    <h5 className='mb-4'> <i class="fa fa-plus-circle me-2" aria-hidden="true"></i>
                        Account Opening</h5>
                    <div className='ms-4'> <Link to={'https://support.zerodha.com/category/account-opening/resident-individual'} style={{ textDecoration: "none" }}><p>Resident individual</p></Link>
                        <Link to={'https://support.zerodha.com/category/account-opening/minor'} style={{ textDecoration: "none" }}><p>Minor</p></Link>
                        <Link to={'https://support.zerodha.com/category/account-opening/nri-account-opening'} style={{ textDecoration: "none" }}><p>Non Resident Indian (NRI)</p></Link>
                        <Link to={'https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening'} style={{ textDecoration: "none" }}><p>Company, Partnership, HUF and LLP</p></Link>
                        <Link to={'https://support.zerodha.com/category/account-opening/glossary'} style={{ textDecoration: "none" }}><p>Glossary</p></Link></div>
                </div>

                <div className="col-4 p-5" >
                    <h5 className='mb-4'> <i class="fa fa-user me-2" aria-hidden="true"></i>
                        Your Zerodha Account</h5>
                    <div className="ms-4">
                        <Link style={{ textDecoration: "none" }}><p>Your Profile</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Account modification</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Client Master Report (CMR) and Depository Participant (DP)</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Nomination   </p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Transfer and conversion of securities</p></Link>
                    </div>
                </div>


                <div className="col-4 p-5" >
                    <h5 className='mb-4'><i class="fa fa-bar-chart me-2" aria-hidden="true"></i>
                        Kite</h5>
                    <div className="ms-4"><Link style={{ textDecoration: "none" }}><p>IPO</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Trading FAQs</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Margin Trading Facility (MTF) and Margins</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Charts and orders</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Alerts and Nudges</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>General</p></Link>
                    </div>
                </div>
            </div>

            <div className="row ms-5">
                <div className="col-4 p-5" >
                    <h5 className='mb-4'> <i class="fa fa-credit-card-alt me-2" aria-hidden="true"></i>
                        Funds</h5>
                    <div className="ms-4">
                        <Link style={{ textDecoration: "none" }}><p>Add money</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Withdraw money</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Add bank accounts</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>EMandates</p></Link>
                    </div>
                </div>
                <div className="col-4 p-5" >
                    <h5 className='mb-4'><i class="fa fa-circle-o-notch me-2" aria-hidden="true"></i>
                        Console</h5>
                    <div className="ms-4">
                        <Link style={{ textDecoration: "none" }}><p>Portfolio</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Corporates actions</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Funds statement</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Reports</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Profile</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Segments</p></Link>
                    </div>
                </div>
                <div className="col-4 p-5" >
                    <h5 className='mb-4'><i class="fa fa-circle-o me-2" aria-hidden="true"></i>
                        Coin</h5>
                    <div className="ms-4">
                        <Link style={{ textDecoration: "none" }}><p>Understanding mutual funds and Coin</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Coin app</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Coin web</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>Transactions and reports</p></Link>
                        <Link style={{ textDecoration: "none" }}><p>National Pension Schemes (NPS)</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
