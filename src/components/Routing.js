import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ReservePage from "../pages/ReservePage";

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/reserve' element={<ReservePage/>}/>
    </Routes>
  )
}
