import React, { useState } from 'react';
import './ProfileOverview.css'
import docu from '../../assets/docu.png';
import share from '../../assets/share.png';
import send from '../../assets/send.png';
import TabPanel from './SubComponents/TabPanel';
import ShareModal from './SubComponents/ShareModal';

const ProfileOverview = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className='profileoverview'>
                <div className='row m-0'>
                    <div className='col-7 position-relative'>
                        <img className='profileimage' src={docu} alt='docu' />
                    </div>
                    <div className='col-5'>
                        <span className='shareOption' onClick={() => setModalShow(true)}>
                            <img src={share} alt='shareimg' style={{ marginRight: "5px" }} /> Share
                        </span>
                        <ShareModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
                <div className='titleSection'>
                    <h5 style={{ color: "#414047", fontSize: "18px" }}>Docu sign</h5>
                    <p style={{ color: "#6F6E73", marginBottom: "5px", fontSize: "14px" }}>sign smart contracts seamlessly</p>
                    <p style={{ color: "#587BE0", fontSize: "14px" }}>Utilities</p>
                    <div className='openInNewTab'>
                        <button className='openBtn'>Open <img src={send} alt="sendimg" /> </button>
                        <span style={{ color: "#6F6E73" }}>24,000+ users</span>
                    </div>
                </div>
            </div>
            <TabPanel />
        </>
    )
}

export default ProfileOverview;
