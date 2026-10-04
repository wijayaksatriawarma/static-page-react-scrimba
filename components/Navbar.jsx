import React from 'react'
import ReactLogo from '../images/react-logo.png'

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={ReactLogo} alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}