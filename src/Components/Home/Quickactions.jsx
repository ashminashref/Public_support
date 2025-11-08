import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Quickactions.css';

// MUI Icons
import HailIcon from '@mui/icons-material/Hail';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import DomainIcon from '@mui/icons-material/Domain';

function Quickactions() {
  return (
    <div className='mb-5 pb-5' > {/* Example black background for context */}
      <p style={{ color: '#ffffff' }}>Quick Actions</p>
      <Row className='gy-4'>
        
        {/* Card 1 */}
        <Col lg={4}>
          <Card className="quick-action-card text-center quick-action-gradient-1"> {/* Added gradient class */}
            <Card.Body>
              <HailIcon sx={{ fontSize: 40, color: '#fff' }} /> 
              <Card.Text className='m-0 mt-2 fw-bold text-white'> {/* Added text-white */}
                Call Taxi
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col lg={4}>
          <Card className="quick-action-card text-center quick-action-gradient-2"> {/* Added gradient class */}
            <Card.Body>
              <PlumbingIcon sx={{ fontSize: 40, color: '#fff' }} />
              <Card.Text className='m-0 mt-2 fw-bold text-white'>
                Find Plumber
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col lg={4}>
          <Card className="quick-action-card text-center quick-action-gradient-3"> {/* Added gradient class */}
            <Card.Body>
              <DomainIcon sx={{ fontSize: 40, color: '#fff' }} />
              <Card.Text className='m-0 mt-2 fw-bold text-white'>
                Govt. Office
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default Quickactions;