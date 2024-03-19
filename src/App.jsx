import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Success from "./components/contact/Success.jsx"
import BMI from "./components/BMI.jsx"


function App() {
const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
    <Route index element={<BMI />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/success" element={<Success />}/>

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
