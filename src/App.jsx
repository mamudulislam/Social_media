import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Newsfeed from './pages/Postupdate/Newsfeed'
import Friend from './pages/Friend/Friend'
import Aboutprofile from './pages/Aboutprofile/Aboutprofile'
import Store from './pages/Store/Store'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={< Layout />}>
          <Route path='/Profile' element={<Home />} />
          <Route path='/Newsfeed' element={<Newsfeed />} />
          <Route path='/Friend' element={<Friend />} />
          <Route path='/Aboutme' element={<Aboutprofile />} />
          <Route path='/Store' element={<Store />} />
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