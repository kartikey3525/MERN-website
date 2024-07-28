 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Services} from './pages/Services'
import {Contact} from './pages/Contact'
import {Register} from './pages/Register'
import { Login } from './pages/Login' 
import { Error } from './pages/Error'
import { Footer } from './components/footer/Footer'
import { Logout } from './pages/Logout'

 
 export default function App() {
   return (
     <BrowserRouter>
       <Navbar/>
         
       <Routes>
         <Route path='/' element={<Home />} />

         <Route path='/About' element={<About />} />

         <Route path='/Services' element={<Services />} />
         
         <Route path='/Contact' element={<Contact />} />

         <Route path='/Register' element={<Register />} />

         <Route path='/Login' element={<Login />} />

         <Route path='/Logout' element={<Logout />} />

         <Route path='*' element={<Error />} />
         
       </Routes>  
     <Footer/>
     </BrowserRouter>
   )
 }
 