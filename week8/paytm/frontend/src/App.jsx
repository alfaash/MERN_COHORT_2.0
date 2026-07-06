import {Routes, BrowserRouter,Route, Link, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Send from "./pages/Send"

function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/send' element={<Send/>}></Route>
          <Route path='*' element={<Navigate to="/"/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
