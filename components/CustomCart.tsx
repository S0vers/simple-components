// components/Card.js
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const CustomCard = () => {
  return (
    <div className='group my-10 flex max-w-2xl flex-col items-center rounded-3xl bg-[#f8f8f8] px-14 pb-16 text-center transition duration-500 ease-in-out hover:shadow-2xl dark:bg-[#121017] dark:hover:scale-105 sm:m-0 sm:flex-row sm:px-8 sm:py-12 sm:text-start'>
      <div className='-mt-[100px] h-[250px] w-full max-w-[1000px] overflow-hidden rounded-md transition duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl sm:-ml-[60px] sm:mr-8 sm:mt-0 sm:h-[300px] sm:max-w-64'>
        <Image
          alt='placeholder Image'
          src='/image.jpg'
          width={400}
          height={400}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='cursor-default transition duration-700 ease-in-out group-hover:translate-y-4 sm:group-hover:-translate-y-4'>
        <h2 className='mb-3 text-2xl font-medium transition duration-700 ease-in-out group-hover:text-primary md:mr-8'>
          John Doe
        </h2>
        <h3 className='opacity-75 transition duration-700 ease-in-out group-hover:opacity-100'>
          UX Developer
        </h3>
        <p className='mb-8 max-w-80 text-sm opacity-50 transition duration-700 ease-in-out group-hover:opacity-100 sm:w-full'>
          Empowering users through captivating interfaces, turning ideas into
          pixel-perfect realities.
        </p>
        <Button className='rounded-[30px] border border-[#121017] bg-transparent px-7 py-4 text-[#121017] hover:bg-transparent dark:border-[#f8f8f8] dark:text-[#f8f8f8]'>
          Follow Account
        </Button>
      </div>
    </div>
  )
}

export default CustomCard
