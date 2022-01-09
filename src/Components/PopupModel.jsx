import React from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components';
import Filters from '../Pages/Home/SubComponents/Filters';

const CountFilter = styled.span`
border-radius: 50%;
background-color: #885FFF;
padding: 2px 7px;
font-size: 14px;
color: white;
text-align: center;
`
const PopupModel = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Filter <CountFilter>2</CountFilter>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Filters />
            </Modal.Body>
        </Modal>
    )
}

export default PopupModel
