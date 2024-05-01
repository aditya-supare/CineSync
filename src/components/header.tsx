import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Darkmode from './Darkmode'




export default function header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-1xl'>
      <div className='flex gap-4'>
        <MenuItem title = "home" address = "/" Icon = {AiFillHome} />
        <MenuItem title = "about" address = "/about" Icon = {BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <Darkmode />
      <Link href={'/'} className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-green-500 py-1 px-2 rounded-lg'>Cine</span>
        <span className='text-xl hidden sm:inline'>Sync</span>
      </Link>
      <ul className='flex'>
        <li className='p-2 cursor-pointer'>
          Login
        </li>
        <li className='p-2 cursor-pointer'>
          Signup
        </li>
      </ul>
      </div>
    </div>
  )
}
