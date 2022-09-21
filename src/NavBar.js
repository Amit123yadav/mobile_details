import React, { useState } from 'react'


const NavBar = () => {
    const [isOpen, setIsOpne] = useState(false)
    return (
        <div className='sticky'>
            <header className={isOpen ? 'mobile-version' : 'header'}>
                <div className='head'>
                    <div className='logo'>
                        <h3>logo</h3>
                    </div>
                    <div className='hamburg-1'>
                        <i class="fa-solid fa-xmark " onClick={() => setIsOpne(!isOpen)}></i>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                        <a href='#'>About </a>
                        <a href='#'>Contact Us</a>
                    </li>
                    <li>
                        <a href='#' className='hamburg' onClick={() => setIsOpne(!isOpen)}>
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar;