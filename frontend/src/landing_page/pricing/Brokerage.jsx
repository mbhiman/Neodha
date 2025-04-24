import React from 'react';

function brokerage() {
    return (
        <div className="container">
            <h4 className='text-center mt-5'>Calculate your costs upfront using our brokerage calculator</h4>

            <div className="row p-5">
                <h3 className='p-5'>Charges explained</h3>
                <div className="col p-5">
                    <div>
                        <p className='charges-title'>Securities/Commodities transaction tax</p>
                        <p className="small-text">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

                        <p className="small-text">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                        </p>
                    </div>
                    <div>
                        <p className="charges-title">Transaction/Turnover Charges</p>

                        <p className="small-text">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                        <p className="small-text">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                        <p className="small-text"> BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                        <p className="small-text">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                        </p>
                        <p className="small-text">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    </div>

                    <div>
                        <p className="charge-title"> Call & trade</p>
                        <p className="small-text">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    </div>


                    <div>
                        <p className="charges-title">Stamp charges</p>
                        <p className="small-text">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    </div>
                </div>

                <div className="col p-5">
                    <div>
                        <p class='charges-title'>GST</p>
                        <p className="small-text">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges).</p>
                    </div>
                    <div>
                        <p className="charges-title">SEBI Charges</p>
                        <p className="small-text">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    </div>
                    <div>
                        <p className="charges-title">DP (Depository participant) charges</p>
                        <p className="small-text"> ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p className="small-text">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p className="small-text"> Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                        </p>
                    </div>
                    <div>
                        <p className="charges-title">Pledging charges</p>
                        <p className="small-text"> ₹30 + GST per pledge request per ISIN.</p>
                    </div>
                    <div>
                        <p className="charges-title">AMC (Account maintenance)</p>
                        <p className="small-text">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here
                        </p>
                        <p className="small-text">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
                    </div>
                    <div>
                        <p className="charges-title">Corporate action order charges</p>
                        <p className="small-text"> ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                    </div>

                </div>
            </div>


            <div className="row p-5">
                <div className="col p-5">
                    <h5 className='mb-4'>Disclaimer</h5>
                    <p style={{ fontSize: "14px" }}>
                        For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged
                    </p></div>
            </div>
        </div>
    );
}

export default brokerage;