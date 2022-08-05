
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Login from '../pages/Login';

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
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/newBlog">
        <Route path="" element={<NewBlog/>} />
        </Route>
        
        <Route path="/details/:id">
        <Route path="" element={<Details/>} />
        </Route>
        
        <Route path="/updateBlog/:id">
          <Route path="" element={<UpdateBlog/>} />
        </Route>
        
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default AppRouter