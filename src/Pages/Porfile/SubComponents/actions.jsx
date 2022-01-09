import React from 'react'
import { BsArrowUpRight, BsArrowDownLeft } from 'react-icons/bs';


const Actions = () => {
    return (
        <>
            <div className="container collectibles-sec">
                <div className="row">
                    <div className="col-12 col-md-6 my-2">
                        <button type="button" className='actions-button btn'>
                            <div className='d-flex'>
                                <div className='send-div'>Send
                                    <span className='arrow-icon'><BsArrowUpRight /></span></div>

                            </div>
                        </button>
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <button type="button" className='actions-button btn'>
                            <div className='d-flex'>
                                <div className='send-div'>Received
                                    <span className='arrow-icon'><BsArrowDownLeft /></span></div>

                            </div>
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Actions

