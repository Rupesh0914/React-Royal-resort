import React from 'react'

function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
Hero.defaultProps ={
    hero: "defaultHero"
};
// this will give us the default hero component if in case we search with soemthing we dont have in our website.

export default Hero
