import React from 'react'
import './Emergencycont.css'
import { numbers } from '../Data/Emergencycontacts'
import { Row, Col } from 'react-bootstrap'

function Emergencycont() {
  return (
    <div>
      <h1 className='mt-5'>Emergency Contacts</h1>
      <h6 className=' pb-5 fw-normal text-secondary'>Quick access to emergency services</h6>

      <Row className='mb-5'>
        <Col lg={12}>
          {numbers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="cont-holder p-3 rounded-3 mb-3" key={index}>
                <div className="top d-flex align-items-center gap-3 ">
                  <div className="icon-box" style={{background: item.iconGradient}}>
                    <Icon className="em-icon"  style={{color:item.iconColor}}/>
                  </div>
                  <div className="texts">
                    <p className='m-0 p-0'>
                      {item.mainHeading}
                      <br />
                      <span className='sub-heading'>{item.subHeading}</span>
                    </p>
                  </div>
                </div>

                <div className="bottom mt-4">
                  <a href={`tel:${item.number}`} className='btn call-btn  w-100' style={{background: item.buttonGradient,color:'white'}}>
                    Call {item.number}
                  </a>
                </div>
              </div>
            )
          })}
        </Col>
      </Row>

      <div className="cont-holder mb-5 pb-5 p-3 rounded-3">
        <p className='m-0 p-0'>Other Important Numbers</p>
        <div className="lists d-flex justify-content-between ">
          <ul className='number-name'>
            <div className="li number-name-in">Women Helpline</div>
            <div className="li number-name-in">Child Helpline</div>
            <div className="li number-name-in">Disaster Management</div>
            <div className="li number-name-in">Senior Citizen Helpline</div>
          </ul>

          <ul className='number-name num'>
            <div className="li number-name-in">1091</div>
            <div className="li number-name-in">1098</div>
            <div className="li number-name-in">1078</div>
            <div className="li number-name-in">14567</div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Emergencycont
