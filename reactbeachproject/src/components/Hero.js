import React from 'react'
// will be able to reuse it
// children to access the props which is the banner
// hero is the prop we are creating ourselves
// hero classname is equal to the prop
export default function Hero ({ children, hero }) {
  return (
    <header className={hero}>
      {children}

    </header>
  )
}
Hero.defaultProps = {
  hero: 'defaultHero'
}

// creating a children prop which contains the header prop, also
// creating our owm hero prop which will passed down to other
// components accessinng it meaning all the css files in defaulthero will
// be accesssible. however we can overwrite it in also
