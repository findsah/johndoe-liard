import React from 'react'
import pencil from '../../../assets/pancil.png'
import defi1 from '../../../assets/defi1.png'

const ConnectedExperience = () => {
    return (
        <>
            <div className="container experience-sec">
                <div className="row">
                    <div className="col-12 p-0">
                        <p className='connected-experience-count'>2 connected experiences with devon</p>
                    </div>
                    <div className="col-12 py-3 px-0">
                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <div className='connected-experience docu text-center'>
                                    <img className='' src={pencil} alt="pencil" />
                                </div>
                                <div className="">
                                    <div className='mx-2'>
                                        <h5 className='collectible-name m-0'>Digital Ninja</h5>
                                        <p className='collectible-by'>by devon.near</p>
                                        <h5 className='disconnect mt-1'>Disconnect</h5>
                                    </div>
                                    <div> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-0">
                        <div className="d-flex justify-content-between">
                            <div className='d-flex'>
                                <div className='connected-experience defi text-center'>
                                    <img className='' src={defi1} alt="pencil" />
                                </div>
                                <div className="">
                                    <div className='mx-2'>
                                        <h5 className='collectible-name m-0'>Digital Ninja</h5>
                                        <p className='collectible-by'>by devon.near</p>
                                        <h5 className='disconnect mt-1'>Disconnect</h5>
                                    </div>
                                    <div> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectedExperience
