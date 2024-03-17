
import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Meme from './Components/Meme'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={`/meme`} element={<Meme/>}/>

      </Routes>

      
    </div>
  )
}

export default App