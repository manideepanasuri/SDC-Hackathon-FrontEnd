import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <>
    <div className='relative flex items-center justify-center h-96' id='section'>
    <div className='absolute inset-0 bg-cover bg-center blur-md' id='in123'></div>
    <div className='relative text-neutral-content font-sans w-2/5 font-medium'>
      <span className='text-center' id='exp'>Experience the smarter way to get ride</span>
    </div>
    <div className='relative flex gap-2 justify-center bg-cover bg-center w-3/5'>
      <label className="input input-bordered flex items-center gap-2 w-2/5">
      <svg fill="#ffffff" width="20px" height="20px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <title>location</title> <path d="M10.406 26.969l10.406-21.938-20.813 11.125h10.406v10.813z"/> </g>

      </svg>
        <input type="text" className="grow" placeholder="From" />
      </label>

      <label>
        <button className='btn'>
          <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

          <g id="SVGRepo_bgCarrier" stroke-width="0"/>

          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

          <g id="SVGRepo_iconCarrier"> <path d="M21 9L9 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 15L3 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18 12L20.913 9.08704V9.08704C20.961 9.03897 20.961 8.96103 20.913 8.91296V8.91296L18 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 18L3.08704 15.087V15.087C3.03897 15.039 3.03897 14.961 3.08704 14.913V14.913L6 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

          </svg>
        </button>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-2/5">
      <svg width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="#ffffff" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M12 14.0137V22" stroke="#ffffff" stroke-miterlimit="10" stroke-linecap="round"/> </g>

      </svg>
        <input type="text" className="grow" placeholder="To" />
      </label>
      <label className='btn'>
        See Fares
      </label>
    </div>
    </div>


    </>
  )
}
