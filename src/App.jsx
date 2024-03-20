import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/contact/Contact.jsx"
import Success from "./components/contact/Success.jsx"
import BMI from "./components/BMI.jsx"
import Exercises from "./components/exercises/index.jsx"


function App() {
const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
    <Route index element={<BMI />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/success" element={<Success />}/>
    <Route path="/exercises" element={<Exercises />}/>
  </Route>
)

)


  return (
    <>
     <RouterProvider router={router}/>
     <Footer/>
    </>
  )
}

export default App
