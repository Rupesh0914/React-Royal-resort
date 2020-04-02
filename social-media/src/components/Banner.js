import React from 'react'

function Banner({children, title,subtitle}) {
    return (
        <div className="banner">
            <div>{title}</div>
            <div></div>
            <p>{subtitle}</p>
            {children}
            
        </div>
    )
}

export default Banner
