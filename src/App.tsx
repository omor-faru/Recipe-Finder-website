import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Favorite from './Pages/Favorite'
import './index.css'

function App() {
  const location = useLocation()

  const noFooterPaths: string[] = ['/about', '/login', '/contact', '/favorite']
  const hideFooter = noFooterPaths.includes(location.pathname)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App

