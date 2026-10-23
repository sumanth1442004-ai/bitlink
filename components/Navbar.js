
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between px-4">
        <div className='font-bold text-2xl'>
          <Link href="/"><div>Bitlink</div></Link>
        </div>
      <ul className="flex justify-between items-center gap-3 font-bold">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <li className='font-bold flex gap-3'>
           <Link href="/shorten"><button className='bg-purple-500 shadow-lg  rounded-lg w-20 border border-white p-1'>Try now</button></Link>
           <Link href="/Github"><button className='bg-purple-500 shadow-lg  rounded-lg w-20 border border-white p-1'>Git Hub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
