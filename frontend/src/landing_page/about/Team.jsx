import React from 'react';
import { Link } from 'react-router-dom';
import nithinKamath from '../../assets/images/nithinKamath.jpg';
import nikhil from '../../assets/images/nikhil.jpg';
import Seema from '../../assets/images/Seema.jpg';
import Austin from '../../assets/images/Austin.jpg';
import Hanan from '../../assets/images/Hanan.jpg';
import karthik from '../../assets/images/karthik.jpg';
import Venu from '../../assets/images/Venu.jpg';
import Kailash from '../../assets/images/Kailash.jpg'

function Team() {
    return (
        <div className="container p-5 mb-5 ">
            <h1 className='text-center mb-5'>People</h1>
            <div className="row mb-5">
                <div className="col text-center mt-3 ">
                    <img src={nithinKamath} alt="Nitin kamath's image" className='p-1 mb-4 ' style={{ borderRadius: "100%", width: "50%" }} />
                    <h4>Nithin Kamath</h4>
                    <p className='text-muted'>Founder, CEO</p>
                </div>

                <div className="col p-4 mt-4 " style={{ fontSize: "16px" }}>
                    <p className='mb-3'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br /> hurdles he faced during his decade long stint as a trader. Today, <br /> Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p className='mb-3'>He is a member of the SEBI Secondary Market Advisory Committee<br /> (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p className='mb-3'>Playing basketball is his zen.</p>

                    <p className='' > Connect on <Link to={'/'} style={{ textDecoration: "none" }}>Homepage</Link> / <Link style={{ textDecoration: "none" }}>TradingQnA </Link>/ <Link style={{ textDecoration: "none" }}>Twitter</Link></p>
                </div>
            </div>

            <div className="row mb-5 text-center text-muted">
                <div className="col">
                    <img src={nikhil} class="team-images" alt="nikhil-image" />
                    <h5>Nikhil Kamath</h5>
                    <p>Co-founder & CFO</p>
                </div>
                <div className="col">
                    <img src={Kailash} class="team-images" alt="kailash-image" />
                    <h5>Dr. Kailash Nadh</h5>
                    <p>CTO</p>
                </div>
                <div className="col">
                    <img src={Venu} class="team-images" alt="venu-image" />
                    <h5>Venu Madhav</h5>
                    <p>COO</p>
                </div>
            </div>

            <div className="row mb-5 text-center text-muted">
                <div className="col">
                    <img src={Hanan} class="team-images" alt="Hanan-image" />
                    <h5>Hanan Delvi</h5>
                    <p>CCO</p>
                </div>
                <div className="col">
                    <img src={Seema} class="team-images" alt="Seema-image" />
                    <h5>Seema Patil</h5>
                    <p>Director</p>
                </div>
                <div className="col">
                    <img src={karthik} class="team-images" alt="Karthik-image" />
                    <h5>Karthik Rangappa</h5>
                    <p>Chief of Education</p>
                </div>
            </div>
            <div className="row text-center text-muted">
                <div className="col"></div>
                <div className="col">
                    <img src={Austin} class="team-images" alt="Austin-image" />
                    <h5>Austin Prakesh</h5>
                    <p>Director Strategy</p>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default Team;