


import { Route,Routes } from 'react-router'
import {MainLayout} from './Pages/MainLayout/MainLayout'
import {Products} from './Pages/Products/Products'
import {MainPage} from './Pages/Main/Main'
import {Favorites} from './Pages/Favorites/Favorites'

function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<MainLayout/>}>
      <Route index  element={<MainPage/>}/>
      <Route path='products/' element={<Products/>}/>
      <Route path='products/:id/' element={<Products/>}/>
      <Route path='favorite/' element={<Favorites/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
