import {lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

const Home  = lazy(()=>import("./Home"));
const PostDetail  = lazy(()=>import("./PostDetail"));
const About  = lazy(()=>import("./about"));

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/PostDetail/:id" element={<PostDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
