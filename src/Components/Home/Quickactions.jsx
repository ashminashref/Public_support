import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'; // Import Card
import './Quickactions.css';

// MUI Icons
import HailIcon from '@mui/icons-material/Hail';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import DomainIcon from '@mui/icons-material/Domain';

function Quickactions() {
  return (
    <div className='mb-5 pb-5'>
      <p>Quick Actions</p>
      <Row className='gy-4'>
        
        {/* Card 1 */}
        <Col lg={4}>
          <Card className="quick-action-card text-center">
            <Card.Body>
              <HailIcon color="primary" sx={{ fontSize: 40 }} />
              <Card.Text className='m-0 mt-2 fw-bold'>
                Call Taxi
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col lg={4}>
          <Card className="quick-action-card text-center">
            <Card.Body>
              <PlumbingIcon color="primary" sx={{ fontSize: 40 }} />
              <Card.Text className='m-0 mt-2 fw-bold'>
                Find Plumber
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col lg={4}>
          <Card className="quick-action-card text-center">
            <Card.Body>
              <DomainIcon color="primary" sx={{ fontSize: 40 }} />
              <Card.Text className='m-0 mt-2 fw-bold'>
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