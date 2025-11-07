import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './Quickactions.css'

// MUI Icons
import HailIcon from '@mui/icons-material/Hail';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import DomainIcon from '@mui/icons-material/Domain';

function Quickactions() {
  return (
    <div>
        <p>Quick Actions</p>
        <Row className='gy-4'>
            <Col lg = {4}>
            <div className="action-box rounded-2 d-flex align-items-center  justify-content-between p-2">
                <p className='m-0'>Call Taxi</p>
                <HailIcon/>
            </div>
            </Col>

            <Col lg = {4}>
            <div className="action-box-2 rounded-2 d-flex align-items-center  justify-content-between p-2">
                <p className='m-0'>Find Plumber</p>
                <PlumbingIcon/>
            </div>
            </Col>

            <Col lg = {4}>
            <div className="action-box-3 rounded-2 d-flex align-items-center  justify-content-between p-2">
                <p className='m-0'>Govt. Office</p>
                <DomainIcon/>
            </div>
            </Col>

        </Row>
    </div>
  )
}

export default Quickactions