import React, { useState } from 'react'
import './profile.css'
import bookmark from '../../assets/bookmark.png'
import notebook from '../../assets/notebook.png'
import Collectibles from './SubComponents/collectibles';
import Actions from './SubComponents//actions';
import ConnectedExperience from './SubComponents/connectedExperience';

const Profile = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            <div className='container-fluid py-3'>
                <div className="row justify-content-between">
                    <div className="col-2">
                        <div className='profile-pic-div'>HR</div>
                    </div>
                    <div className="col-3">
                        <div className='d-flex justify-content-between'>
                            <div><img className='' src={bookmark} alt="pencil" /></div>
                            <div><img className='' src={notebook} alt="pencil" /></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-5">
                    <div className="col-21">
                        <h4 className='user-name'>Devon Lane</h4>
                        <p className='user-email'>devonlane@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="row steps-row justify-content-between nav-tabs m-0 p-0" id="pills-tab" role="tablist">
                    <div className="col-4 p-0 text-center" role="presentation">
                        <a className={`nav-link ${toggleState === 1 ? 'active' : ''}`} onClick={() => toggleTab(1)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Collectibles</a>
                    </div>
                    <div className="col-4 p-0 text-center" role="presentation">
                        <a className={`nav-link ${toggleState === 2 ? 'active' : ''}`} onClick={() => toggleTab(2)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Actions</a>
                    </div>
                    <div className="col-4 p-0 text-center" role="presentation">
                        <a className={`nav-link ${toggleState === 3 ? 'active' : ''}`} onClick={() => toggleTab(3)} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Connected</a>
                    </div>

                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Collectibles /></div>
                    <div className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Actions /> </div>
                    <div className={`${toggleState === 3 ? 'tab-pane fade show active ' : 'tab-pane fade'}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><ConnectedExperience /></div>
                </div>
            </div>
        </>
    )
}

export default Profile
