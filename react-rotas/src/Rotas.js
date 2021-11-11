import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Usuario from './pages/Usuario'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<Sobre/>} path="/sobre" />
        <Route  element={<Usuario/>} path="/usuario" />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas;
