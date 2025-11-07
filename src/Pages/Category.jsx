import React from 'react'
import { Container } from 'react-bootstrap'
import Topbar from '../Sharedcomponents/Topbar'
import Bottombar from '../Sharedcomponents/Bottombar'
import Search from '../Components/Categories/Search'
import Items from '../Components/Categories/Items'

function Category() {
  return (
    <div>
        <Container className='mt-4'>
            <Topbar/>
            <Search/>
            <Items/>
            <Bottombar/>
        </Container>
    </div>
  )
}

export default Category