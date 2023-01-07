import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Services from './pages/Services'
import Products from './pages/Products';
import AI from './pages/AI';
import Career from './pages/Career';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Services />} />
          <Route path='/product' element={<Products />} />
          <Route path='/ai' element={<AI />} />
          <Route path='/career' element={<Career />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
