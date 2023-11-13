
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Publications from './pages/publications/Publications';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="publications" element={<Publications />} />
      </Routes>

    </>
  )
}

export default App
