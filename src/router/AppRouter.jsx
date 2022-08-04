
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewBlog from '../pages/NewBlog';
import Details from '../pages/Details';
import UpdateBlog from '../pages/UpdateBlog';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<NotFound/>} />
        <Route path="/*" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/NewBlog" element={<NewBlog/>} />
        <Route path="/Details/:id" element={<Details/>} />
        <Route path="/UpdateBlog/:id" element={<UpdateBlog/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default AppRouter