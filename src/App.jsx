import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Newsfeed from './pages/Postupdate/Newsfeed'
import Friend from './pages/Friend/Friend'
import Aboutprofile from './pages/Aboutprofile/Aboutprofile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Newsfeed" element={<Newsfeed />} />
          <Route path="/Friend" element={<Friend />} />
          <Route path="/Aboutme" element={<Aboutprofile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App