import React from 'react'

export default function Title({title}) {
    return (
        < h1 style={{fontSize:'28px', fontWeight:900, display:'block', opacity:0.99}}> 
            {title}
        </h1>
    )
}
