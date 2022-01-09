import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const Collectibles = () => {
    return (
        <>
            <div className="container collectibles-sec">
                <div className="row">
                    <div className="col-4 p-0">
                        <div className='d-flex align-items-center'>
                            <div className='collectibles-heading'>
                                <h4>Collectibles</h4>
                            </div>
                            <div className='mx-2'>
                                <div className='collectibles-count'>3</div>
                                </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 py-3 px-0">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <div className='collectible-photo'></div>
                                    <div className='mx-2'>
                                        <h5 className='collectible-name m-0'>Digital Ninja</h5>
                                        <p className='collectible-by'>by devon.near</p>
                                    </div>
                                </div>
                                <div><IoIosArrowForward /></div>
                            </div>
                        </div>
                        <div className="col-12 py-3 px-0">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <div className='collectible-photo'></div>
                                    <div className='mx-2'>
                                        <h5 className='collectible-name'>Digital Ninja</h5>
                                        <p className='collectible-by'>by devon.near</p>
                                    </div>
                                </div>
                                <div><IoIosArrowForward /></div>
                            </div>
                        </div>
                        <div className="col-12 py-3 px-0">
                            <div className="d-flex justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <div className='collectible-photo'></div>
                                    <div className='mx-2'>
                                        <h5 className='collectible-name'>Digital Ninja</h5>
                                        <p className='collectible-by'>by devon.near</p>
                                    </div>
                                </div>
                                <div><IoIosArrowForward /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Collectibles
