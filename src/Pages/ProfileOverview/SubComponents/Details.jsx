import React from 'react'

const Details = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item itemBorder">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button accBtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Overview
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        it is easy to electronically sign,
                        manage and distribute all your contracts and documents safely,
                        securely, anywhere, anytime- paperlessly.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
