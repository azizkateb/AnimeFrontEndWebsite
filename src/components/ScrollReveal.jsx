import { useMemo } from 'react'
import { motion } from 'framer-motion'

const directionMap = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
}

const getInitialPosition = (direction) => directionMap[direction] || directionMap.up

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  staggerChildren = false,
  ...props
}) {
  const initial = useMemo(() => getInitialPosition(direction), [direction])

  const variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        x: initial.x,
        y: initial.y,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          ease: 'easeOut',
          delay,
          ...(staggerChildren
            ? {
                staggerChildren: 0.12,
                delayChildren: delay,
              }
            : {}),
        },
      },
    }),
    [delay, duration, initial, staggerChildren],
  )

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealItem({
  children,
  className = '',
  duration = 0.6,
  delay = 0,
  direction = 'up',
  ...props
}) {
  const initial = useMemo(() => getInitialPosition(direction), [direction])

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: initial.x, y: initial.y },
      visible: { opacity: 1, x: 0, y: 0 },
    }),
    [initial],
  )

  return (
    <motion.div
      variants={variants}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
