import React from 'react'
import './Index.css'
import Logo from '../../logo.svg'
import SearchBar from './materials/SearchBar.js'
import MobileMenu from './materials/MobileMenu'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    // function handleClick() {
    //     isToggleOn: true 
    // }
    return (
        <div className='header'>
            <div className="navbar">
                <img className={Logo} src={Logo} alt="" />
                <div className="navLinks">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                        <li>COTACT US</li>
                    </ul>
                </div>
                <div className="searchComponent">                <SearchBar />
                </div>
                <div className="mobileNav">
                    {/* <div onClick={handleClick()}>
                        {isToggleOn ?                     <SearchIcon className='mobileSearchBar' /> : <SearchBar />
}
                    </div> */}
                    <SearchIcon className='mobileSearchBar' />
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Header
