import { useState } from 'react'
import './App.css'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 h-screen">
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* close button */}
      <button className={`${isOpen?"fixed":"hidden"} w-7 h-7 rounded-full right-4 top-5 text-center z-50`} onClick={()=>setIsOpen(false)}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path></svg>
      </button>
      {/* Sidebar */}
      <div className={`fixed lg:relative z-50 h-full flex flex-col text-center font-normal transform transition-transform duration-300 ${isOpen?"translate-x-0":"-translate-x-full"} lg:col-span-2 lg:translate-x-0`}>
          <div className="grid grid-cols-4 flex-1 bg-blue-950">
            <div className='col-span-1 flex justify-center items-center'><img src="/nishyan.svg" alt="" /></div>
            <div className='col-span-2 flex flex-col justify-center items-start text-red-50 ms-3'>
              <div>Nishyan</div>
              <div className='text-xs'><a href="#" className='underline text-gray-400'>Visit Store</a></div>
            </div>
            <div className='col-span-1 flex justify-center items-center text-red-50'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-5 w-5 fill-white  '><path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></div>
          </div>
          <div className="flex-9 bg-blue-950 text-red-50 flex flex-col items-start p-1">
            <div className='ps-4 pt-2 pb-2 flex justify-center items-center text-gray-300'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-gray-300 h-5 w-5 me-3'><path d="M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z"/></svg>
              Home
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/orders.svg" alt="" />
              Order
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/products.svg" alt="" />
              Products
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/delivery.svg" alt="" />
              Delivery
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/marketing.svg" alt="" />
              Marketing
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/analytics.svg" alt="" />
              Analytics
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 bg-gray-600 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/payouts.svg" alt="" />
              Payouts
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/discounts.svg" alt="" />
              Discounts
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/audience.svg" alt="" />
              Audience
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/appearence.svg" alt="" />
              Appearence
            </div>
            <div className='ps-4 pt-2 pb-2 flex justify-start items-center text-gray-300 rounded-md w-full'>
               <img className='h-5 w-5 me-3' style={{filter: 'invert(1)'}} src="/plugins.svg" alt="" />
              Plugins
            </div>
          </div>
          <div className="flex-1 bg-blue-950">
            <div className='flex mx-4 rounded-md bg-gray-600 text-red-50 p-1'>
              <div className='flex-1 flex justify-center items-center bg-gray-500 rounded m-1 mr-3 p-1'>
                <img className='w-8 h-8' style={{filter:'invert(0.9)'}} src='/wallet.svg'></img>
              </div>
              <div className='flex-5 flex flex-col items-start justify-start text-sm'>
                <div className='text-gray-300 font-thin place-items-start'>Available Credits</div>
                <div className='font-medium'>224.10</div>
              </div>
            </div>
          </div>
      </div>
      <div className='col-span-12 lg:col-span-10 text-center bg-slate-50'>
        {/* Header */}
        <div className='flex justify-between items-center border-1 border-gray-400 h-17'>
          {/* Payouts */}
          <div className='flex justify-between w-50 lg:w-40 mx-7'>
            <div className='flex lg:hidden items-center justify-center' onClick={()=>setIsOpen(!isOpen)}>
              {/* Hamburgur menu for opening the sidebar */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
            </div>
            <div className='font-normal text-lg'>Payouts</div>
            <div className='flex justify-center items-center ms-2'>
              <img  className='h-3 w-3' src="/qMark.svg" alt="" />
              <p className='text-xs ms-1 text-gray-500'>How it works</p>
            </div>
          </div>
          {/* Searchbar */}
          <div className="relative w-75 lg:w-100 max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
              className="w-full rounded-lg border border-gray-200 bg-gray-200 py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          {/* Message section */}
          <div className='flex justify-evenly items-center w-25 me-5'>
            <div className='w-9 h-9 bg-gray-200 rounded-full flex justify-center items-center '>
              <img className='h-5 w-5' src="/messaging.webp" alt="" />
            </div>
            <div className='w-9 h-9 bg-gray-200 text-zinc-700 rounded-full flex justify-center items-center'>
              <svg className='w-6 h-6' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

