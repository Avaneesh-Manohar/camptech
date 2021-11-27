import React from 'react'
import './index.css'

function Button({label, className}) {
    return (
            <button className={className}>{label}</button>
    )
}

export default Button
