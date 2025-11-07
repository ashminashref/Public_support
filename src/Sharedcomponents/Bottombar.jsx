import React from 'react'
import { Container } from 'react-bootstrap'
import './Bottombar.css'
// MUI Icons
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import EmergencyIcon from '@mui/icons-material/Emergency';
import FolderIcon from '@mui/icons-material/Folder';

import { Link } from 'react-router-dom';
function Bottombar() {
  return (
    <div>
        <div className="holder fixed-bottom">
            <Container className='d-flex  justify-content-between align-items-center '>
              <Link to = '/emergency' className='text-decoration-none'>
                <div className='d-flex flex-column align-items-center nav-item'>
                <EmergencyIcon className='icon'/>
                <p className='m-0 p-0 name '>Emergency</p>
                </div>
                </Link>
                <Link to = '/' className='text-decoration-none'>
                <div className='d-flex flex-column align-items-center nav-item'>
                <HomeFilledIcon className='icon'/>
                <p className='m-0 p-0 name'>Home</p>
                </div>
                </Link>
                <Link className='text-decoration-none' to = '/category'>
                <div className='d-flex flex-column align-items-center nav-item'>
                <FolderIcon className='icon'/>
                <p className='m-0 p-0 name text-decoration-none'>Categories</p>
                </div>
                </Link>
            </Container>
        </div>
    </div>
  )
}

export default Bottombar