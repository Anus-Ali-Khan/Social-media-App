import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { AiOutlineSearch } from "react-icons/ai"


function Navbar() {
    return <div className='navbar'>
        <nav>
            <input type="checkbox" id="chk1" />
            <div className='logo'><h1>Social Influencer</h1></div>
            <div className='search-box'>
                <form action="">
                    <input type="text" name='search' id='srch' placeholder='Search' />
                    <button type='submit'><AiOutlineSearch /></button>
                </form>
            </div>
        </nav>
    </div>
}

export default Navbar;