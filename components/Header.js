import React from 'react'
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, GlobeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

      {/* Left  */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
      </div>

      {/* middle */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-lg'>
        <input className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type='text' placeholder='Start you search ' />
        <SearchIcon className="hidden  md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 hover:bg-green-700" />


      </div>
      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        {/* <GlobeAltIcon classNmame="h-6 w-6 text-blue-500" /> */}
        <GlobeIcon className="h-6 text-teal-800 text-green-700" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

    </header>
  )
}

export default Header
