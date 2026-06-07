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

        {/* Main Section */}
        <div className="px-10">
          {/* Overview */}
          <div className=" flex flex-col py-10">
            {/* overview header */}
            <div className="flex justify-between mb-4">
              <h1 className="text-lg font-medium">Overview</h1>
              <div className='border-1 rounded-sm border-zinc-700 md:px-2'>
                <select className='border-none outline-none' name="month" id="month">
                  <option value="">This Month</option>
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>
              </div>
            </div>
            {/* Money cards */}
            <div className="grid grid-cols-12 gap-4">
              {/* Card 1 */}
              <Card title={"Next Payout"} amount={"2,312.23"} orders={23} bottomSec={true}/>
              {/* Card 2 */}
              <Card title={"Amount Pending"} amount={"92,312.20"} orders={13} bottomSec={false}/>
              {/* Card 3 */}
              <Card title={"Amount Processed"} amount={"23,92,312.19"} orders={0} bottomSec={false}/>
            </div>
          </div>
          <section className='flex flex-col gap-6'>
            {/* Transaction Headline */}
            <div className="flex flex-col gap-6">
              <h5 class="flex font-medium text-xl">Transactions | This Month</h5>
              <div class="flex gap-3">
                <button class="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full" fdprocessedid="55s5fo">Payouts (22)</button>
                <button class="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full" fdprocessedid="3o9aj">Refunds (6)</button>
              </div>
            </div>
            <div className="flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
                  <input type="text" placeholder="Order ID or transactions ID" className="bg-transparent outline-none w-full" />
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
                    <img alt="updown icon" loading="lazy" width="14" height="14" decoding="async" src="/updown.png" />
                  </button>
                  <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <colgroup>
                    <col className="w-1/5" /><col className="w-1/5" /><col className="w-1/5" /><col className="w-1/5" /><col className="w-1/5" />
                  </colgroup>
                  <thead className="text-[#4D4D4D]">
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">Order ID</th>
                      <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Status</th>
                      <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Transaction ID</th>
                      <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Refund Date</th>
                      <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">Order Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-[#E6E6E6]">
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281209</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX123456</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 8:45 PM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281210</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX789012</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Tomorrow, 11:00 AM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹950.50</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281211</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX345678</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 3:30 PM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹750.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281212</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX901234</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 11:20 AM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹2000.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281213</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX567890</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Tomorrow, 9:00 AM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1800.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281214</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX098765</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 2:00 PM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹500.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281215</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX456789</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 10:30 AM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹3000.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281216</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX987654</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Tomorrow, 11:30 AM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1200.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281217</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-[#999999] w-[10px] h-[10px] rounded-full"></span>Processing</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX654321</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 4:00 PM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹900.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281218</td>
                      <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]"><span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>Successful</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">TRX234567</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 9:45 AM</td>
                      <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1500.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

function Card(props){
  return (
    <div className="flex flex-col col-span-12 sm:col-span-6 lg:col-span-4 bg-sky-700 rounded-md">
      <div className="flex text-red-50 flex-col py-4">
        <div className='flex items-center mb-1 ms-3'>
          <h1 className='me-2'>{props.title}</h1>
          <svg className='h-4 w-4' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
        </div>
        <div className='flex justify-between'>
          <h1 className='flex-1 text-3xl font-semibold'>₹{props.amount}</h1>
            {
              props.orders !=0 ? (
                <div className='flex-1 flex items-center justify-center'>
                  <h1 className="underline">23 Order</h1>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
                </div>
              ):null
            }
        </div>
      </div>
      {
        props.bottomSec?(
          <div className="bg-sky-800 rounded-md text-red-50 px-6 py-2 flex justify-between items-center">
            <span className=''>Next Payment Date: </span>
            <span className=''>Today, 4:00PM</span>
          </div>
        ):null
      }
    </div>
  )
}
export default App

