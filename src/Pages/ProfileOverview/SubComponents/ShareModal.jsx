import React from 'react'
import { Modal } from 'react-bootstrap';
import copy from '../../../assets/copy.png'
import twitter from '../../../assets/twitter.png'
import gamebox from '../../../assets/gamebox.png'
import linkedin from '../../../assets/linkedin.png'

const ShareModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Share this Experience
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='linkDiv'>https://nearlabs.app/app/docu_s...</div>
                <div className='copyLink'>
                    <img src={copy} alt='copyicon' /> Copy link
                </div>
                <div className='socialIcons'>
                    <img src={twitter} alt='copyicon' />
                    <img src={gamebox} alt='copyicon' style={{margin: "0 1rem"}} />
                    <img src={linkedin} alt='copyicon' />
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ShareModal
