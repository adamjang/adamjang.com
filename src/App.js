import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './Home'
import Ooo from './Ooo'

function App () {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="ooo" element={<Ooo />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}


export default App;
