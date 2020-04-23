import React from 'react'

export default function Hero ({ children, hero }) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}
// default prop to state that 
// it must match the css className
Hero.defaultProps = {
  hero: 'defaultHero'
}
