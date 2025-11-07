import React from 'react'
import { Container } from 'react-bootstrap'
import './Bottombar.css'
// MUI Icons
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import EmergencyIcon from '@mui/icons-material/Emergency';
import FolderIcon from '@mui/icons-material/Folder';
function Bottombar() {
  return (
    <div>
        <div className="holder fixed-bottom">
            <Container className='d-flex  justify-content-between align-items-center '>
                <div className='d-flex flex-column align-items-center nav-item'>
                <EmergencyIcon className='icon'/>
                <p className='m-0 p-0 name'>Emergency</p>
                </div>

                <div className='d-flex flex-column align-items-center nav-item'>
                <HomeFilledIcon className='icon'/>
                <p className='m-0 p-0 name'>Home</p>
                </div>
                <div className='d-flex flex-column align-items-center nav-item'>
                <FolderIcon className='icon'/>
                <p className='m-0 p-0 name'>Caregories</p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Bottombar