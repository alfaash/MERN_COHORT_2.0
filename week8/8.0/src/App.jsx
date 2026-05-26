import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12">
      <div className='col-span-4 text-start sm:text-center lg:text-end bg-green-400 text-zinc-800 text-xl rounded-full'>
        Hi there from div 1
      </div>
      <div className='col-span-4 text-start sm:text-center lg:text-end bg-red-400 text-zinc-800 text-xl rounded-full'>
        Hi there from div 2
      </div>
      <div className='col-span-4 text-start sm:text-center lg:text-end bg-blue-400 text-zinc-800 text-xl rounded-full'>
        Hi there from div 3
      </div> 
      {/* <div style={{backgroundColor:'green'}}>
        Hi there from div 4
      </div> 
      <div style={{backgroundColor:'blue'}}>
        Hi there from div 5
      </div> 
      <div style={{backgroundColor:'red'}}>
        Hi there from div 6
      </div>                  
      <div style={{backgroundColor:'green'}}>
        Hi there from div 7
      </div>  */}
    </div>
  )
}

export default App
