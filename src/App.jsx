

import { Routes, Route, useLocation } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import Achive from "./pages/Achievments"
import "./assets/css/public.css"

import 'sweetalert2/src/sweetalert2.scss'
import PdfCv from "./components/cards/PdfCv"

//famer motion
import { AnimatePresence } from "framer-motion"


function App() {

const location = useLocation();

  return (
    <div className="row m-0 p-0">
       <NavBar className="fixed"/>
       <AnimatePresence>
            <Routes location={location} key={location}>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/Contacts" element={<Contacts/>}/>
              <Route path="/achieve" element={<Achive/>}/>
              <Route path="/viewCv" element={<PdfCv/>}/>
            </Routes> 
       </AnimatePresence>  
     </div>
  )
}

export default App
