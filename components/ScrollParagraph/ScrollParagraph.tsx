'use client'
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

export default function ScrollParagraph({ value }: { value: string }) {
  const element = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })
  return (
    <div className='overflow-'>
      <motion.div
        className='max-w-4xl overflow-hidden'
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.div>
    </div>
  )
}
