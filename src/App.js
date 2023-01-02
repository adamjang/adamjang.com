import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './pages/home/Home'
import Travel from './pages/travel/Travel'
import Ooo from './pages/ooo/Ooo'

function App () {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="travel" element={<Travel />} />
        <Route path="ooo" element={<Ooo />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}


export default App;
