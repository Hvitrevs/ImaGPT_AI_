import React from 'react';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages'; 

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-gradient-to-b from-[#141e2a] to-[#13182f] px-7 py-2'>

      <Link to="/" className= "hidden sm:block sm:ml-0 md:mr-0 w-28 mr-5 ">
        <img src= { logo } alt="logo" /></Link>
        
      <h1 className='mt-0.5 font-inter font-bold text-[#bacae7] text-[1.7rem] tracking-[.08rem] sm:ml-2'>Start generating your own visual library</h1>

    <Link to= "/create-post" className='mt-2 text-sm font-inter font-bold bg-[#462446] hover:bg-[#73fff6] border-[#ff7dda] text-[#ff8ef4] hover:text-[#025853] tracking-[.05rem] px-4 py-2 rounded-2xl shadow-lg shadow-[#724c6e] hover:shadow-[#73fff6]'>Start</Link>
    
    </header>
    
    <main className='sm:p-8 px-4 py-2 w-full bg-gradient-to-b from-[#13182f] to-[#21112d] min-h-[calc(100vh-73px)]'>

      <Routes>
        <Route path='/' element={ <Home / >} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
      
    </main>
    </BrowserRouter>
  )
}

export default App