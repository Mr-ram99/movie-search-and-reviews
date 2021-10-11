import React from 'react'
import logo from '../Assets/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="Logo" width="40"/>
                        <strong> MovieBase</strong>
                    </a>

                </div>
            </nav>
        </div>
            )
}

export default Navbar
