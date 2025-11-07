
import './App.css'
import './i18n'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Emergency from './Pages/Emergency'
import Category from './Pages/Category'
function App() {
  const {t, i18n} = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language;

  },[i18n.language])
  return (
    <>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/emergency'  element ={<Emergency/>}/>
      <Route path = '/category' element = {<Category/>}/>
     </Routes>
    </>
  )
}

export default App
