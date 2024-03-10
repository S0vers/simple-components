'use client'
import React, { useRef } from 'react'
import styles from './ScrollParagraph.module.scss'
import { useScroll, motion } from 'framer-motion'

export default function Word({ value }: { value: string }) {
  const element = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })

  const words = value.split(' ')
  return (
    <div className={styles.paragraph} ref={element}>
      {words.map((word, index) => {
        return (
          <motion.span key={index} style={{ opacity: scrollYProgress }}>
            {word}{' '}
          </motion.span>
        )
      })}
    </div>
  )
}
