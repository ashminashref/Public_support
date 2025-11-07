import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'react-bootstrap'
import './Topbar.css'
function Topbar() {
  const {t, i18n} = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en'? 'mal':'en';
    i18n.changeLanguage(newLang)
  }
  return (
    <Container>
    <div className='d-flex justify-content-between fixed align-items-center'>
      <div>
        <h6 className='logo-name m-0 p-0'>Ekarool</h6>

      </div>
      <div>
  <p onClick={toggleLanguage} className='lang-btn m-0 p-0'>
          {t('change_language')}
        </p>
      </div>
      
    </div>
    </Container>
  )
}

export default Topbar