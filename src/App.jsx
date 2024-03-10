

import { Routes, Route } from "react-router-dom"
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
import { motion } from "framer-motion"


function App() {


  return (
    <div className="row m-0 p-0 vh-100">
      
      <motion.div initial={{ y: -250 }} animate={{ y: -10 }} className="fixed pt-2">
        <NavBar />
      </motion.div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/Contacts" element={<Contacts/>}/>
              <Route path="/achieve" element={<Achive/>}/>
              <Route path="/viewCv" element={<PdfCv/>}/>
            </Routes> 
     </div>
  )
}

export default App
