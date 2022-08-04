
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from '../pages/Login';


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<NotFound/>} />
        <Route path="/*" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter