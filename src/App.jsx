import './App.css'
import './i18n'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
// import { useTranslation } from 'react-i18next'
// import { useEffect } from 'react'
import CategoryPage from './Pages/CategoryPage'
import Category from './Pages/Category'
import Emergency from './Pages/Emergency'
// Don't need individual page imports anymore

function App() {
  // const { t, i18n } = useTranslation()

  // useEffect(() => {
  //   document.documentElement.lang = i18n.language;
  // }, [i18n.language])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category/>} />
        <Route path='/emergency' element={<Emergency/>}/>
        {/* Main Category Route: Handles /emergency, /shops, /vehicles, etc. */}
        <Route path='/:mainCategoryName' element={<CategoryPage />} />
        
 
        <Route path='/:mainCategoryName/:subCategoryName' element={<CategoryPage />} />
      </Routes>
    </>
  )
}

export default App