import React from 'react'
import {Container} from 'react-bootstrap'
import './Home.css'
import Topbar from '../Sharedcomponents/Topbar'
import Welcome from '../Components/Home/Welcome'
import Bottombar from '../Sharedcomponents/Bottombar'
import Quickactions from '../Components/Home/Quickactions'
function Home() {
  return (
    <div className='black'>
        <Container className='p-4'>
            <Topbar/>
            <Welcome/>
            <Bottombar/>
            <Quickactions/>
        </Container>
    </div>
  )
}

export default Home