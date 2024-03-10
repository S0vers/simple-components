import React from 'react'

export default function CartDetails() {
  return (
    <div
      style={{
        backgroundImage: `url('/image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}
      className='group h-full w-full'
    >
      <div className='relative h-full w-full bg-gradient-to-b from-transparent via-black/40 to-black/65'>
        <h1 className='absolute bottom-32 left-1/2 -translate-x-1/2 transform cursor-default text-6xl font-bold uppercase text-white/20 transition duration-700 ease-in-out group-hover:text-white md:text-8xl'>
          Happiness
        </h1>
      </div>
    </div>
  )
}
