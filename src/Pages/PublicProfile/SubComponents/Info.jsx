import React from 'react'

const Info = () => {
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
                        digital ninjas are a collection of 1000
                        unique collectibles on the NEAR blockchain
                        that serve to honor and preserve art.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
