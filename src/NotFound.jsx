import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <>
          <div className="flex flex-col justify-center items-center h-[100vh]">
              <h1 className='text-[clamp(16px,8vw,60px)] mb-[40px]'>404 - Oops Not Found</h1>
               <Link className='text-[clamp(25px,5vw,44px)] text-green-500 font-bold hover:text-3xl hover:text-red-700' to="/">Home</Link> 
      </div>
      </>
  )
}

export default NotFound;