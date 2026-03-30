//  
import {lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import  Dashboard  from './components/Dashboard'
// import  Landing  from './components/Landing'
const Dashboard = lazy(()=> import("./components/Dashboard"));
const Landing = lazy(()=> import('./components/Landing'));

function App() {

  return (
    <>
      <div style={{background:"skyblue"}}>
        <p>This is a constant paragraph</p>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
