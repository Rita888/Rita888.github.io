import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BlogDetails from "./pages/BlogDetails"

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/'}
    >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog/:id' element={<BlogDetails />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
