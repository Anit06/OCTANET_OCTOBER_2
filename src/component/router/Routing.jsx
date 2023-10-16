import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import CreatePost from '../../pages/CreatePost'

const Routing = () => {
  return (
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path="/create" element={<CreatePost />}></Route>
    </Routes>
  )
}

export default Routing