import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Success from './components/contact/Success';
import Contact from './components/Contact/Contact'
import { BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            exact
            path='/contact'
            element={<Contact />}
          />
          <Route
            exact
            path='/success'
            element={<Success />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
