import React from 'react'
import { Container } from 'react-bootstrap'
import Topbar from '../Sharedcomponents/Topbar'
import Bottombar from '../Sharedcomponents/Bottombar'
import Emergencycont from '../Components/Emergency/Emergencycont'
function Emergency() {
  return (
    <div>
        <Container className='mt-4'>
            <Topbar/>
            <Emergencycont/>
            <Bottombar/>
        </Container>
    </div>
  )
}

export default Emergency