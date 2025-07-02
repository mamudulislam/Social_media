import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Newsfeed from './pages/Postupdate/Newsfeed'
import Friend from './pages/Friend/Friend'
import Aboutprofile from './pages/Aboutprofile/Aboutprofile'
import Store from './pages/Store/Store'
import Carts from './pages/Carts/Carts'
import Checkout from './pages/Checkout/Checkout'
import Product from './pages/Product/Product'
import Productdetailes from './pages/Product/Componentes/Productdetailes/Productdetailes'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={< Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Newsfeed' element={<Newsfeed />} />
          <Route path='/Friend' element={<Friend />} />
          <Route path='/Aboutme' element={<Aboutprofile />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/Carts' element={<Carts />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Product/:slug' element={<Productdetailes />} />
        </Route >
      </Route >

    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App