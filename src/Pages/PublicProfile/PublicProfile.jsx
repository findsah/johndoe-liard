import React, { useState } from 'react';
import './PublicProfile.css';
import propic from '../../assets/propic.png';
import activity1 from '../../assets/activity1.png';
import Info from './SubComponents/Info';
import PendingOffers from './SubComponents/PendingOffers';
import TradingHistory from './SubComponents/TradingHistory';

const PublicProfile = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className='publicProfile'>
            <img src={propic} className='publicpic' alt="propic" />
            <div className='bottomDiv'>
                <h5>Digital Ninja</h5>
                <p style={{ marginBottom: "10px" }}>#72873</p>
                <div className='titleDiv'>
                    <img className='proimg' src={activity1} alt='proimg' />
                    <p>Johndoe.near</p>
                </div>
            </div>

            <div className="row m-0">
                <div className="row steps-row justify-content-between nav-tabs m-0 p-0" id="pills-tab" role="tablist">
                    <div className="col-4 p-0 text-center" role="presentation">
                        <a className={`nav-link ${toggleState === 1 ? 'active' : ''}`} onClick={() => toggleTab(1)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">info</a>
                    </div>
                    <div className="col-4 p-0 text-center" role="presentation">
                        <a className={`nav-link ${toggleState === 2 ? 'active' : ''}`} onClick={() => toggleTab(2)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">PendingOffers</a>
                    </div>
                    <div className="col-4 p-0 text-center" role="presentation">
                        <a className={`nav-link ${toggleState === 3 ? 'active' : ''}`} onClick={() => toggleTab(3)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Trading History</a>
                    </div>

                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Info /></div>
                    <div className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><PendingOffers /> </div>
                    <div className={`${toggleState === 3 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><TradingHistory /></div>
                </div>
            </div>
        </div>
    )
}

export default PublicProfile
