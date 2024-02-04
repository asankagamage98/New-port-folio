

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import Achive from "./pages/Achievments"
import "./assets/css/public.css"
function App() {

  return (
    <div className="row m-0 p-0">
       <NavBar />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path="/Contacts" element={<Contacts/>}/>
         <Route path="/achieve" element={<Achive/>}/>
       </Routes>   
     </div>
  )
}

export default App
