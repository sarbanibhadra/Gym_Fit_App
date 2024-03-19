import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/contact/Contact.jsx"
import Success from "./components/contact/Success.jsx"
// import { Description } from "./components/gymfit/index.jsx"
// import About from "./components/About/index.jsx"

function App() {
const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
    <Route index element={<About/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/success" element={<Success />}/>
    <Route path="/description" element={<Description/>}/>

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
