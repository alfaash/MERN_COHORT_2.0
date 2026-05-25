import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RecoilRoot} from "recoil"
import './index.css'
import App from './App.jsx'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'



createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    {/* <App /> */}
    {/* <App1 /> */}
    <App2/>
    {/* <App3/> */}
  </RecoilRoot>
)
