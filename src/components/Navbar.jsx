import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-950 text-white'>
        <div className="mycontainer justify-between items-center flex px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className="text-green-700">OP/&gt;</span>
        </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-950 my-5 rounded-md flex justify-between items-center'>
        
          <img className='invert w-10 p-1 ' src="/icons/github.svg" alt="github logo" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
        
        </div>
    </nav>
  )
}

export default Navbar