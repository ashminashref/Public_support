import React from 'react'
import { useTranslation } from 'react-i18next'
function Topbar() {
  const {t, i18n} = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en'? 'mal':'en';
    i18n.changeLanguage(newLang)
  }
  return (
    <div className='d-flex justify-content-between align-items-center'>
        <h6 className='logo-name'>Ekarool</h6>
        <button onClick={toggleLanguage}>
          {t('change_language')}
        </button>
    </div>
  )
}

export default Topbar