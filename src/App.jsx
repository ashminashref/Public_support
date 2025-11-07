
import './App.css'
import './i18n'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
function App() {
  const {t, i18n} = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language;

  },[i18n.language])
  return (
    <>
     <Routes>
      <Route path='/' element = {<Home/>}/>
     </Routes>
    </>
  )
}

export default App
