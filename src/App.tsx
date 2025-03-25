


import { Route,Routes } from 'react-router'
import {MainLayout} from './Pages/MainLayout/MainLayout'
import {Products} from './Pages/Products/Products'
import { Product } from './Pages/Product/Product'
import {MainPage} from './Pages/Main/Main'
import {Favorites} from './Pages/Favorites/Favorites'
import { CreateItem } from './Pages/CreateItem/CreateItem'

function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<MainLayout/>}>
      <Route index  element={<MainPage/>}/>
      <Route path='products/' element={<Products/>}/>
      <Route path='products/:title/' element={<Product/>}/>
      <Route path='favorite/' element={<Favorites/>}/>
      <Route path='create-product/' element={<CreateItem/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
