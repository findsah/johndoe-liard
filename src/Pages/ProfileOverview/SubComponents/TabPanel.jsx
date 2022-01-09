import React, { useState } from 'react'
import Activities from './Activities';
import Details from './Details';

const TabPanel = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className="row m-0">
            <div className="row steps-row justify-content-between nav-tabs m-0 p-0" id="pills-tab" role="tablist">
                <div className="col-6 p-0 text-center" role="presentation">
                    <a
                        className={`nav-link ${toggleState === 1 ? 'active' : ''}`}
                        onClick={() => toggleTab(1)} id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        Details
                    </a>
                </div>
                <div className="col-6 p-0 text-center" role="presentation">
                    <a
                        className={`nav-link ${toggleState === 2 ? 'active' : ''}`}
                        onClick={() => toggleTab(2)}
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        Activities
                    </a>
                </div>

            </div>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <Details />
                </div>
                <div
                    className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <Activities />
                </div>
            </div>
        </div>
    )
}

export default TabPanel
