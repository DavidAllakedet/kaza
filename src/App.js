import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Room from './pages/Room/Room'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Footer from './components/Footer/Footer'


function App() {
  return (
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    )
  );
}

export default App