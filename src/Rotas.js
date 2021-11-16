import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Feed from './pages/home/Feed'
import Post from './pages/post/Post'
import Edit from './pages/edit/Edit'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<Feed/>} path="/feed" />
        <Route  element={<Post/>} path="/post" />
        <Route  element={<Edit/>} path="/edit/:id" />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas;
