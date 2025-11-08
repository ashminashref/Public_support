import React from 'react'
// import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import './Topbar.css' // We will add styles here

function Topbar() {
  // const {t, i18n} = useTranslation()

  // const toggleLanguage = () => {
  //   const newLang = i18n.language === 'en'? 'mal':'en';
  //   i18n.changeLanguage(newLang)
  // }

  return (
    <Container fluid className='topbar-style fixed-top'> 
      <Container> {/* Inner container for content alignment */}
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center gap-2'>
            <img src="/Img/logo.jpg" className='logo m-0 p-0' alt="" />
          
          
                        <h6 className='logo-name m-0 p-0'>Ekaroolkar</h6>

          </div>
          <div>
            {/* <p onClick={toggleLanguage} className='lang-btn m-0 p-0'>
              {t('change_language')}
            </p> */}
                <div class="active-blinker"></div>

          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Topbar;