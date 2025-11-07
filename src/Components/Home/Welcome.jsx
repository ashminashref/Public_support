import React from 'react'
import './Welcome.css'

import { useTranslation } from 'react-i18next';

// react-card
import Card from 'react-bootstrap/Card';

function Welcome() {
  const {t} = useTranslation()


  const headerStyle = {
    fontSize:'10px'

  }
  return (
    <div className='mt-5 mb-5'>
        <h3 className={headerStyle} >{t('community-heading')}</h3>

        <div className='d-flex gap-4'>
             <Card style={{ width: '18rem' }} className='box'>
      <Card.Body>
        <Card.Title >{t('Top-Link-1')}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">3</Card.Subtitle>
      </Card.Body>
    </Card>

       <Card style={{ width: '18rem' }} className='box'>
      <Card.Body>
        <Card.Title>{t('Top-Link-2')}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">3</Card.Subtitle>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default Welcome