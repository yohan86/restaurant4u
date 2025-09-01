
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  

  return (
    <>
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/sd" element={<Home />} /> 
          </Routes>
        </BrowserRouter>
        <h1 className="text-[#ff0000]">dsds</h1>
      </div>
    </>
  )
}

export default App
